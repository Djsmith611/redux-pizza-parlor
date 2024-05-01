const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET all orders that have been placed, populated with data from the pizza collection
router.get("/", (req, res) => {
  pool
    .query(
      `
        SELECT 
            orders.*, 
            pizza.name AS pizza_name, 
            line_item.quantity AS pizza_quantity
        FROM 
            orders 
        JOIN 
            line_item ON orders.id = line_item.order_id
        JOIN 
            pizza ON line_item.pizza_id = pizza.id
        ORDER BY 
            orders.time;
    `
    )
    .then((result) => {
      const orders = {};
      result.rows.forEach((row) => {
        const orderId = row.id;
        if (!orders[orderId]) {
          orders[orderId] = {
            id: orderId,
            customer_name: row.customer_name,
            street_address: row.street_address,
            city: row.city,
            zip: row.zip,
            time: row.time,
            type: row.type,
            total: row.total,
            pizzas: [],
          };
        }
        orders[orderId].pizzas.push({
          id: row.pizza_id,
          name: row.pizza_name,
          quantity: row.pizza_quantity,
        });
      });
      const ordersArray = Object.values(orders);
      res.send(ordersArray);
    })
    .catch((error) => {
      console.log("Error GET /api/order", error);
      res.sendStatus(500);
    });
});

// POST a new order
router.post("/", async (req, res) => {
  const client = await pool.connect();

  try {
    const { customer_name, street_address, city, zip, type, total, pizzas } =
      req.body;
    await client.query("BEGIN");
    const orderInsertResults = await client.query(
      `INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id;`,
      [customer_name, street_address, city, zip, type, total]
    );
    const orderId = orderInsertResults.rows[0].id;

    await Promise.all(
      pizzas.map((pizza) => {
        const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
        const insertLineItemValues = [orderId, pizza.id, pizza.quantity];
        return client.query(insertLineItemText, insertLineItemValues);
      })
    );

    await client.query("COMMIT");
    res.sendStatus(201);
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Error POST /api/order", error);
    res.sendStatus(500);
  } finally {
    client.release();
  }
});

// DELETE an order
router.delete("/:id", (req, res) => {
  pool
    .query('DELETE FROM "orders" WHERE id=$1', [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error DELETE /api/order", error);
      res.sendStatus(500);
    });
});

module.exports = router;

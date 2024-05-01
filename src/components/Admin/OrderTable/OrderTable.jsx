import { useState, useEffect } from "react";
import { TableBody } from "@mui/material";
import { OrderTableItem } from "../../../index";
import axios from "axios";

export default function OrderTable() {
  const [pizzaOrders, setPizzaOrders] = useState([]);

  // On page loads pizza orders
  useEffect(() => {
    console.log("in useEffect");
    getOrders();
  }, []);

  const getOrders = () => {
    axios
      .get("/api/order")
      .then((response) => {
        const ordersData = response.data;
        const flatOrders = ordersData.map((order) => ({
          ...order,
          pizzas: order.pizzas.map((pizza) => ({
            id: pizza.id,
            name: pizza.name,
            quantity: pizza.quantity,
          })),
        }));
        setPizzaOrders(flatOrders);
        console.log(pizzaOrders);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong!");
      });
  };

  return (
    <TableBody>
      {pizzaOrders.map((order, index) => (
        <OrderTableItem key={index} order={order} />
      ))}
    </TableBody>
  );
}

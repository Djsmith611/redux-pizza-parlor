// will need axios to commit info to database
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Grid,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from "@mui/material"; // Import Material-UI components

function Checkout() {
    // pull from stores for information
    const customerInfo = useSelector(store => store.customerOrder); 
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

// FOR REFERENCE
    // router.post('/', async (req, res) => {
    //     const client = await pool.connect();
    
    //     try {
    //         const {
    //             customer_name,
    //             street_address,
    //             city,
    //             zip,
    //             type,
    //             total,
    //             pizzas
    //         } = req.body;
    //         await client.query('BEGIN')
    //         const orderInsertResults = await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
    //         VALUES ($1, $2, $3, $4, $5, $6)
    //         RETURNING id;`, [customer_name, street_address, city, zip, type, total]);
    //         const orderId = orderInsertResults.rows[0].id;
    
    //         await Promise.all(pizzas.map(pizza => {
    //             const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
    //             const insertLineItemValues = [orderId, pizza.id, pizza.quantity];
    //             return client.query(insertLineItemText, insertLineItemValues);
    //         }));
    
    //         await client.query('COMMIT')
    //         res.sendStatus(201);
    //     } catch (error) {
    //         await client.query('ROLLBACK')
    //         console.log('Error POST /api/order', error);
    //         res.sendStatus(500);
    //     } finally {
    //         client.release()
    //     }
    // });

    // Variable for data to send in POST
    let customerDataToSend = {
        customer_name: customerInfo.customer_name,
        street_address: customerInfo.street_address,
        city: customerInfo.city,
        zip: customerInfo.zip,
        type: customerInfo.type,
        total: customerInfo.total,
        pizzas: cart
    };

    // Function to send data to database on Checkout
    const handleClick = () => {
        axios.post('/api/order', customerDataToSend).then((response) => {
            dispatch({ type: 'RESET_INPUT' });
            navigate('/')
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong sending your order to the restaurant!');
        })
    }

    return (
        <Box>
            <Grid>
                <h3>Step 3: Checkout</h3>
                <div className='order-summary'>
                        <div className='customer-info'>
                            <p>{customerInfo.customer_name}</p>
                            <p>{customerInfo.street_address}</p>
                            <p>{customerInfo.city} {customerInfo.zip}</p>
                        </div>
                        <div className='order-type'>
                            <h4>{customerInfo.type}</h4>
                        </div>
                </div>
            </Grid>
            <div className='order-table'>
                <TableContainer>
                    <Table sx={{ minWidth: 350 }}>
                        <TableHead sx={{ bgcolor: 'secondary.light' }}>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Cost</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((pizza) => (
                                <TableRow key={pizza.id}>
                                    <TableCell>{pizza.name}</TableCell>
                                    <TableCell align="right">{pizza.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> 
            </div>
            <h2>Total: {customerInfo.total}</h2>
            <Button variant="contained" color="secondary" onClick={() => {handleClick()}}>Checkout</Button>
        </Box>
    )
}; 

export default Checkout;
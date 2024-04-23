// will need axios to commit info to database
import axios from 'axios';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';


function Checkout() {
    // pull from stores for information
    const customerInfo = useSelector(store => store.customerOrder); 
    const pizzaArray = useSelector(store => store.pizzaArray);
    // constants to create data items for database
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');
    const [total, setTotal] = useState('');
    const [pies, setPies] = useState('');

    // Variable for data to send in POST
    const dataToSend = {
        customer_name: name,
        street_address: address,
        city: city,
        zip: zip,
        type: type,
        total: total,
        pizzas: pies
    };

    // Function to send data to database on Checkout
    const handleClick = () => {
        axios.post('/api/order', dataToSend).then((response) => {
            setName('');
            setAddress('');
            setCity('');
            setZip('');
            setType('');
            setTotal('');
            setPies('');
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong sending your order to the restaurant!');
        })
    }

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


    return (
        <main>
            <h3>Step 3: Checkout</h3>
        {customerInfo.map((info) => (
            <div className='order-summary'>
                    <div className='customer-info'>
                        <p value={name}>{info.customer_name}</p>
                        <p value={address} >{info.street_address}</p>
                        <p><span value={city}>{info.city}</span>, <span value={zip}>{info.zip}</span></p>
                    </div>
                    <div className='order-type'>
                        <h4 value={type}>{info.type}</h4>
                    </div>
            </div>
        ))}
            <div className='order-table'>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Cost</td>
                        </tr>
                    </thead>
                    <tbody>
                        {pizzaArray.map((pizza) => (
                            <tr key={pizza.id}>
                                <td>{pizza.type}</td>
                                <td>{pizza.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div>
        {customerInfo.map((info) => (
            <h2>Total: <span value={total}>{info.total}</span></h2>
        ))}
            <button onClick={() => {
                // use setters for all values; 
                // I need to figure out how to pull the values for this 
                // when these aren't inputs and therefore there isn't an event
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // TO DO: UPDATE ALL SETTER FUNCTIONS TO MAKE THIS WORK
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                setName();
                setAddress();
                setCity();
                setZip();
                setType();
                setTotal();
                setPies();
                // running all of the setter functions before handleClick
                // because i want to make sure that the setters are recording data before
                // i clear all of them in handleClick
                handleClick();
            }}>
            Checkout</button>
        </main>
    )
}; 

export default Checkout;
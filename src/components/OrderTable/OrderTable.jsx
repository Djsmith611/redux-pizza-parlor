import axios from 'axios';
import { useState, useEffect } from 'react';
import OrderTableItem from '../OrderTableItem/OrderTableItem';

function Ordertable() {
    const [pizzaOrders, setPizzaOrders] = useState([]);

    //on page loads pizza orders
    useEffect(() => {
        console.log('in useEffect');
        getOrders();
    }, []);

    const getOrders = () => {
        axios.get('/api/order').then((response) => {
            console.log('in admin get orders');
            setPizzaOrders(response.data)
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        })
    }

    return(
        <tbody>
            <OrderTableItem pizzaOrders={pizzaOrders}/>
        </tbody>
    )
};

export default Ordertable;
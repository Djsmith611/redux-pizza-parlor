import axios from 'axios';
import { useState, useEffect } from 'react';
import OrderTableItem from '../OrderTableItem/OrderTableItem';
import { TableBody} from "@mui/material";

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
        <TableBody>
            <OrderTableItem pizzaOrders={pizzaOrders}/>
        </TableBody>
    )
};

export default Ordertable;
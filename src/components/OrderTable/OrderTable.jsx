import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';

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
                {pizzaOrders.map(order => (
                        <tr key={order.id}>
                            <td>{order.customer_name}</td>
                            <td>{moment(order.time).format('LLL')}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))}
            </tbody>
    )
};

export default Ordertable;
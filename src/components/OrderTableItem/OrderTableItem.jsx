import moment from 'moment';

function OrderTableItem({ pizzaOrders }) {

    return(
        <>
        {pizzaOrders.map(order => (
            <tr key={order.id}>
                <td>{order.customer_name}</td>
                <td>{moment(order.time).format('LLL')}</td>
                <td>{order.type}</td>
                <td>{order.total}</td>
            </tr>
        ))}
        </>
    )
}

export default OrderTableItem;
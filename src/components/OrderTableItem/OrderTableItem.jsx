import moment from 'moment';
import { TableRow, TableCell } from '@mui/material';

function OrderTableItem({ pizzaOrders }) {
    return (
        <>
            {pizzaOrders.map(order => (
                <TableRow key={order.id}>
                    <TableCell>{order.customer_name}</TableCell>
                    <TableCell>{moment(order.time).format('LLL')}</TableCell>
                    <TableCell>{order.type}</TableCell>
                    <TableCell>{order.total}</TableCell>
                </TableRow>
            ))}
        </>
    );
}

export default OrderTableItem;

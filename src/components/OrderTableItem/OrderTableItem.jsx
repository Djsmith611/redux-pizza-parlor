import { TableRow, TableCell } from "@mui/material";
import moment from "moment";

export default function OrderTableItem({ pizzaOrders }) {
  return (
    <>
      {pizzaOrders.map((order) => (
        <TableRow key={order.id}>
          <TableCell>{order.customer_name}</TableCell>
          <TableCell>{moment(order.time).format("LLL")}</TableCell>
          <TableCell>{order.type}</TableCell>
          <TableCell>{order.total}</TableCell>
        </TableRow>
      ))}
    </>
  );
}

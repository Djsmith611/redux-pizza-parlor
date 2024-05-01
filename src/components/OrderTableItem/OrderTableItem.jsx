import { useState } from "react";
import { TableRow, TableCell, Button } from "@mui/material";
import moment from "moment";
import OrderDetails from "../Admin/OrderDetails/OrderDetails";

export default function OrderTableItem({ pizzaOrders }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log("opening");
  };
  const handleClose = () => {
    setOpen(false);
    console.log("closing");
  };


  return (
    <>
      
      {pizzaOrders.map((order) => (
        <TableRow key={order.id} >
          <TableCell>{order.customer_name}</TableCell>
          <TableCell>{moment(order.time).format("LLL")}</TableCell>
          <TableCell>{order.type}</TableCell>
          <TableCell>{order.total}</TableCell>
          <TableCell><Button onClick={handleOpen}>Details</Button><OrderDetails open={open} handleClose={handleClose} order={order}/></TableCell>
        </TableRow>
      ))}
    </>
  );
}

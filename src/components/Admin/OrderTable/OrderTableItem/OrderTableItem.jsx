import { TableRow, TableCell, Button } from "@mui/material";
import { OrderDetails } from "../../../../index";
import { useState } from "react";
import moment from "moment";

export default function OrderTableItem({ order }) {
  const [open, setOpen] = useState(false);

  const time = moment(order.time).format("LLL");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableRow key={order.id}>
      <TableCell>{order.customer_name}</TableCell>
      <TableCell>{time}</TableCell>
      <TableCell>{order.type}</TableCell>
      <TableCell>{order.total}</TableCell>
      <TableCell>
        <Button onClick={handleOpen}>Details</Button>
        <OrderDetails
          open={open}
          handleClose={handleClose}
          order={order}
          time={time}
        />
      </TableCell>
    </TableRow>
  );
}

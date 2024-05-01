import { Backdrop, Button, Box, Typography } from "@mui/material";

export default function OrderDetails({ open, handleClose, order, time }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <Box
        sx={{
          p: 2,
          maxWidth: 400,
          backgroundColor: "#fff",
          borderRadius: 4,
          color: "#000",
        }}
      >
        <Typography variant="h5">Order Details</Typography>
        <Typography variant="body1">Name: {order.customer_name}</Typography>
        <Typography variant="body1">Address: {order.street_address}</Typography>
        <Typography variant="body1">Zip: {order.zip}</Typography>
        <Typography variant="body1">City: {order.city}</Typography>
        <Typography variant="body1">Type: {order.type}</Typography>
        <Typography variant="body1">Total: {order.total}</Typography>
        <Typography variant="body1">Time: {time}</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Pizzas:
        </Typography>
        {order.pizzas.map((pizza, index) => (
          <Box
            key={index}
            sx={{ border: "1px solid #ccc", borderRadius: 4, p: 1, mt: 1 }}
          >
            <Typography variant="body1">Name: {pizza.name}</Typography>
            <Typography variant="body1">Quantity: {pizza.quantity}</Typography>
          </Box>
        ))}
        <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Backdrop>
  );
}

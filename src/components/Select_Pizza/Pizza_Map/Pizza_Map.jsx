import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";

export default function Pizza_Map({ pizza }) {
  const dispatch = useDispatch();

  const sendToCart = () => {
    let payload = {
      ...pizza,
      quantity: 1,
    };
    let action = { type: "ADD_TO_CART", payload: payload };
    dispatch(action);
    action = { type: "ADD_TOTAL", payload: parseFloat(pizza.price) };
    dispatch(action);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="194"
        image={pizza.image_path}
        alt={pizza.name}
      />
      <CardHeader
        title={
          <Typography variant="h5" component="h2" style={{ color: "black" }}>
            {pizza.name}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {pizza.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Button onClick={sendToCart} size="small">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

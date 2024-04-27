import { Container, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleStartOrder = () => {
    navigate("/select");
  };

  return (
    <Container sx={{ textAlign: "center", paddingTop: "50px" }}>
      <Typography variant="h2" gutterBottom>
        Welcome to The Cheesy Pizzeria!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Home of the cheesiest pizzas in town!
      </Typography>
      <Typography variant="body2" gutterBottom>
        Are you ready to indulge in a slice of heaven?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ marginTop: "20px" }}
        onClick={handleStartOrder}
      >
        Start Your Order
      </Button>
      <img
        src="/images/pizza_photo.png"
        alt="Delicious Pizza"
        style={{ marginTop: "50px", width: "100%" }}
      />
      <Typography variant="caption" style={{ marginTop: "20px" }}>
        *Disclaimer: May cause excessive happiness and cheese dreams.
      </Typography>
    </Container>
  );
}

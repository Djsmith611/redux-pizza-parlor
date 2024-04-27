import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function PizzaImage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && (
        <Box mt={2} textAlign="center">
          <img src="images/pizza_photo.png" alt="Delicious Pizza" style={{ width: "100%" }} />
          <Typography variant="body1" mt={1}>
            Pizza is great.
          </Typography>
        </Box>
      )}
    </>
  );
}
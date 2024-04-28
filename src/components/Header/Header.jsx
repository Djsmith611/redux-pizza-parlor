import { AppBar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "primary.main" }}
      onClick={() => {
        handleClick();
      }}
    >
      <Typography variant="h4" component="h1" sx={{ padding: 1 }}>
        Prime Pizza
      </Typography>
    </AppBar>
  );
}

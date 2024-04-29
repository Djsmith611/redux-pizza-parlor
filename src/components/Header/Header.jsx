import { AppBar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';

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
        <LocalPizzaOutlinedIcon />The<LocalPizzaOutlinedIcon />Cheesy<LocalPizzaOutlinedIcon />Pizzeria<LocalPizzaOutlinedIcon />
      </Typography>
    </AppBar>
  );
}

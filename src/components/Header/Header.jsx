import { AppBar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Typography variant="h4" component="h1" sx={{padding: 1}} >
        Prime Pizza
      </Typography>
    </AppBar>
  );
}

export default Header;

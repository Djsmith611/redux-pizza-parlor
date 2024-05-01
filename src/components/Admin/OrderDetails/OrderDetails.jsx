import Backdrop from "@mui/material/Backdrop";
import { Button } from "@mui/material";

export default function OrderDetails({open, handleClose, order}) {


  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
        <Button onClick={handleClose}>close</Button>
    </Backdrop>
  );
}

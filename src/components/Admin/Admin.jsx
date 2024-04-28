import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { OrderTable } from "../../index";

export default function Admin() {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{
      width: "100%",
      transition: { duration: 1 },
    }}
    exit={{ x: window.innerWidth, width: 0, transition: { duration: 0.1 } }}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Order List
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <OrderTable />
          </Table>
        </Paper>
      </Container>
    </motion.div>
  );
}

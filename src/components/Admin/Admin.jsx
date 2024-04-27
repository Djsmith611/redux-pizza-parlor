import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import Ordertable from "../OrderTable/OrderTable";

function Admin() {
    return (
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
                        <Ordertable />
                </Table>
            </Paper>
        </Container>
    );
}

export default Admin;
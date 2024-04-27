// will need axios to commit info to database
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Stack,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Chip, 
    Container
  } from "@mui/material";
  import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Checkout() {
    // pull from stores for information
    const customerInfo = useSelector(store => store.customerOrder); 
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Variable for data to send in POST
    let customerDataToSend = {
        customer_name: customerInfo.customer_name,
        street_address: customerInfo.street_address,
        city: customerInfo.city,
        zip: customerInfo.zip,
        type: customerInfo.type,
        total: customerInfo.total,
        pizzas: cart
    };

    // Function to send data to database on Checkout
    const handleClick = () => {
        axios.post('/api/order', customerDataToSend).then((response) => {
            dispatch({ type: 'RESET_INPUT' });
            navigate('/')
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong sending your order to the restaurant!');
        })
    }

    return (
        <Box sx={{ p: 2 }}>
            <Stack direction="column" justifyContent="space-between" alignItems="center" bgcolor='secondary.light'>
                <br />
                <Typography variant="h5">Step 3: Checkout</Typography>
                <div className='order-summary'>
                        <div className='customer-info'>
                            <p>{customerInfo.customer_name}</p>
                            <p>{customerInfo.street_address}</p>
                            <p>{customerInfo.city} {customerInfo.zip}</p>
                        </div>
                        <Container>
                            <Chip label={`${customerInfo.type}`} color='secondary' />
                        </Container>
                        <br />
                </div>
            </Stack>
            <br />
            <div className='order-table'>
                <TableContainer>
                    <Table sx={{ minWidth: 350 }} size="small">
                        <TableHead sx={{ bgcolor: 'secondary.light' }}>
                            <TableRow>
                                <TableCell ><Typography variant="h6">Name</Typography></TableCell>
                                <TableCell align="right"><Typography variant="h6">Cost</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((pizza) => (
                                <TableRow key={pizza.id}>
                                    <TableCell>{pizza.name}</TableCell>
                                    <TableCell align="right">{pizza.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> 
            </div>
            <Typography variant="h4">Total: {customerInfo.total}</Typography>
            <Button endIcon={<ShoppingCartCheckoutIcon />} variant="contained" color='secondary' onClick={() => {handleClick()}}>Checkout</Button>
        </Box>
    )
}; 

export default Checkout;
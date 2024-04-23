// will need axios to commit info to database
import axios from 'axios';
import { useSelector } from 'react-redux';

function Checkout() {
    // 
    const customerInfo = useSelector(store => store.customerOrder); 
    const pizzaArray = useSelector(store => store.pizzaArray);

    const handleClick = () => {
        axios.post
    }

    return (
        <main>
        {customerInfo.map((info) => (
            <div className='order-summary'>
                <h2>Step 3: Checkout</h2>
                    <div className='customer-info'>
                        <p>{info.customer_name}</p>
                        <p>{info.street_address}</p>
                        <p>{info.city}, {info.zip}</p>
                    </div>
                    <div className='order-type'>
                        <h3>{info.type}</h3>
                    </div>
            </div>
        ))}
        {pizzaArray.map((order) => (
            <div className='order-table'>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Cost</td>
                        </tr>
                    </thead>
                    {/* This will need to come from the what's in Redux from the pizza selections; not sure what we're calling these things? */}
                    <tbody key={order.id}>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        ))}
            <h2>Total: {}</h2>
            <button onClick={handleClick}>Checkout</button>
        </main>
    )
}; 

export default Checkout;
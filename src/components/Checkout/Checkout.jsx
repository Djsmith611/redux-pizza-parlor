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
            <h3>Step 3: Checkout</h3>
        {customerInfo.map((info) => (
            <div className='order-summary'>
                    <div className='customer-info'>
                        <p>{info.customer_name}</p>
                        <p>{info.street_address}</p>
                        <p>{info.city}, {info.zip}</p>
                    </div>
                    <div className='order-type'>
                        <h4>{info.type}</h4>
                    </div>
            </div>
        ))}
            <div className='order-table'>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Cost</td>
                        </tr>
                    </thead>
                    <tbody>
                        {pizzaArray.map((pizza) => (
                            <tr key={pizza.id}>
                                <td>{pizza.type}</td>
                                <td>{pizza.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div>

            <h2>Total: {}</h2>
            <button onClick={handleClick}>Checkout</button>
        </main>
    )
}; 

export default Checkout;
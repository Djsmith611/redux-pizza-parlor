import axios from 'axios';
import { useEffect, useState } from 'react';
import Pizza_Map from '../Pizza_Map/Pizza_Map.jsx';


const Select_Pizza = () => {

    const [pizzaList, setPizzaList] = useState([]); // setters and getters for displaying pizzas
    

    function getPizza() {

    axios.get('/api/pizza').then((r) => { //promise after GET request
        console.log(r.data);
        setPizzaList(r.data)
    }).catch((e) => { //catching errors
        console.log('Error in client-side GET request', e);
        alert('No pizza for you :c');
    })
    };

    useEffect(() => {
        console.log('On page load');
        getPizza();
    }, []);


    return (
        <table>
            <tbody>
                <tr>
        {
            pizzaList.map((pizza) => {
                return <td key={pizza.name}>
                   <Pizza_Map pizza={pizza}/>
                </td>
            })
        }
                </tr>
            </tbody>
        </table>
    )
}

export default Select_Pizza;
import axios from 'axios';
import { useEffect, useState } from 'react';


const Select_Pizza = () => {

    const [pizzaList, setPizzaList] = useState([]);
    

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
        <>
        {
            pizzaList.map((pizza) => {
                return <div key={pizza.id}>
                    <img src={`${pizza.image_path}`}></img>
                </div>
            })
        }
        
        </>
    )
}

export default Select_Pizza;
import { useDispatch } from "react-redux";

const Pizza_Map = ({pizza}) => {
    const dispatch = useDispatch();

    const sendToCart = () => {
        let payload = {
            ...pizza,
            quantity: 1,
        }
        let action = {type: 'ADD_TO_CART', payload: payload};
        dispatch(action);
        action = {type:"ADD_TOTAL", payload: pizza.price}
    }
    

    return (
        <>
        {pizza.name}
        <br/>
        <img width={"250px"} src={`${pizza.image_path}`}/>
        <br/>
        {pizza.description}
        <br/>
        <button onClick={sendToCart}>Add to Cart</button>
        </>

    )


};

export default Pizza_Map;
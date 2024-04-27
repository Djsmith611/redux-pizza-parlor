import { useDispatch } from "react-redux";

const Pizza_Map = ({pizza}) => {

    const dispatch = useDispatch();

    const sendToCart = () => {
        let action = {type: 'SEND_TO_CART', payload: pizza}
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
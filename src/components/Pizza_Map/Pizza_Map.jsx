import { useDispatch } from "react-redux";

export default function Pizza_Map({ pizza }) {
  const dispatch = useDispatch();

  const sendToCart = () => {
    let payload = {
      ...pizza,
      quantity: 1,
    };
    let action = { type: "ADD_TO_CART", payload: payload };
    dispatch(action);
    action = { type: "ADD_TOTAL", payload: parseFloat(pizza.price) };
    dispatch(action);
  };

  return (
    <>
      {pizza.name}
      <br />
      <img width={"250px"} src={`${pizza.image_path}`} />
      <br />
      {pizza.description}
      <br />
      <button onClick={sendToCart}>Add to Cart</button>
    </>
  );
}

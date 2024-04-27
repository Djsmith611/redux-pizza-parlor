import { useLocation } from "react-router-dom";

export default function PizzaImage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && (
        <div
        style={{
          marginTop:"10px"
        }}>
          <img src="images/pizza_photo.png" alt="Pizza" />
          <p>Pizza is great.</p>
        </div>
      )}
    </>
  );
}

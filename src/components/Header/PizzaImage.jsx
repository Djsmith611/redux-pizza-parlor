import { useLocation } from "react-router-dom";

export default function PizzaImage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && (
        <>
          <img src="images/pizza_photo.png" alt="Pizza" />
          <p>Pizza is great.</p>
        </>
      )}
    </>
  );
}

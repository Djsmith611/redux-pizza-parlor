import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pizza_Map } from "../../index";
import { motion } from "framer-motion";
import axios from "axios";

export default function Select_Pizza() {
  const navigate = useNavigate();
  const [pizzaList, setPizzaList] = useState([]); // setters and getters for displaying pizzas

  const getPizza = () => {
    axios
      .get("/api/pizza")
      .then((r) => {
        //promise after GET request
        console.log(r.data);
        setPizzaList(r.data);
      })
      .catch((e) => {
        //catching errors
        console.log("Error in client-side GET request", e);
        alert("No pizza for you :c");
      });
  };

  useEffect(() => {
    console.log("On page load");
    getPizza();
  }, []);

  const handleClick = () => {
    navigate("/info");
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{
        width: "100%",
        transition: { duration: 1 },
      }}
      exit={{ x: window.innerWidth, width: 0, transition: { duration: 0.1 } }}
    >
      <table>
        <tbody>
          <tr>
            {pizzaList.map((pizza) => {
              return (
                <td key={pizza.name}>
                  <Pizza_Map pizza={pizza} />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {" "}
        Next{" "}
      </button>
    </motion.div>
  );
}

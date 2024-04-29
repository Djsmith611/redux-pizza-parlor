import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pizza_Map } from "../../index";
import { motion } from "framer-motion";
import axios from "axios";
import { Button, Grid, Container  } from "@mui/material";

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
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
      <Grid container spacing={2} sx={{margin:"10px"}}>
        {pizzaList.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
            <Pizza_Map pizza={pizza} />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{ mt: 2 }}
      >
        Next
      </Button>
      </Container>
    </motion.div>
  );
};
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Replacement for useHistory
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  FormControl,
  FormLabel,
  Grid,
} from "@mui/material"; // Import Material-UI components

function CustomerInfo() {
  /* CUSTOMER INFO VARIABLES */
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [deliveryType, setDeliveryType] = useState("pickup");

  /* HOOKS */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * HANDLES SUBMIT EVENT
   * @param {*} e EVENT
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: "ADD_CUSTOMER_INFO",
      payload: {
        name,
        streetAddress,
        city,
        zip,
        deliveryType,
      },
    };
    dispatch(action);
    navigate("/checkout");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "streetAddress":
        setStreetAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "zip":
        setZip(value);
        break;
      case "deliveryType":
        setDeliveryType(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="Name"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="text"
            name="streetAddress"
            value={streetAddress}
            onChange={handleChange}
            label="Street Address"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            label="City"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="number"
            name="zip"
            value={zip}
            onChange={handleChange}
            label="ZIP Code"
            required
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Delivery Type</FormLabel>
            <RadioGroup
              name="deliveryType"
              value={deliveryType}
              onChange={handleChange}
            >
              <FormControlLabel
                value="pickup"
                control={<Radio />}
                label="Pickup"
              />
              <FormControlLabel
                value="delivery"
                control={<Radio />}
                label="Delivery"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Next
      </Button>
    </form>
  );
}

export default CustomerInfo;

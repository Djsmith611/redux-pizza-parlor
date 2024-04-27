import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

/**
 * redux reducer to contain all user input
 * @param {object} state  object
 * @param {object} action contains type and may contain payload
 * @returns new state object
 */
const customerOrder = (
  state = {
    customer_name: "",
    street_address: "",
    city: "",
    zip: "",
    type: "",
    total: 0
  },
  action
) => {
  switch (action.type) {
    case "ADD_CUSTOMER_INFO":
      return {
        ...state,
        customer_name: action.payload.name,
        street_address: action.payload.streetAddress,
        city: action.payload.city,
        zip: action.payload.zip,
        type: action.payload.deliveryType
      };
    case "ADD_TOTAL":
      return {
        ...state,
        total: state.total +  action.payload,
      };
    case "SUBTRACT_TOTAL":
      return {
        ...state,
        total: state.total - action.payload,
      }
    case "RESET_INPUT":
      return {
        customer_name: "",
        street_address: "",
        city: "",
        zip: "",
        type: "",
        total: 0
      };
    default:
      return state;
  }
};

const cart = (state = [], action) => {
  // setting cart for adding pizzas on first page (adding them to an array)
  if (action.type === 'ADD_TO_CART') {
    return [...state, action.payload]
    // setting cart to clear on Checkout button click on checkout page (clears the array)
  } else if (action.type === 'RESET_INPUT') {
    return []
  }
  return state;
}

/**
 * The redux store for this application:
 * - configureStore automatically calls "combineReducers"
 * - logger middleware gives detailed console logs for action calls
 */
const reduxStore = configureStore({
  reducer: {
    customerOrder,
    cart
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger); // applying logger middleware
  },
});

export default reduxStore;

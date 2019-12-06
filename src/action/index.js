import axios from "axios";

export const fetchMens = () => {
  return {
    type: "FETCH_MENS"
  };
};

export const fetchWomens = () => {
  return {
    type: "FETCH_WOMENS"
  };
};

export const fetchPhones = () => {
  return {
    type: "FETCH_PHONES"
  };
};
export const addCart = item => {
  return {
    type: "ADD_CART",
    payload: item
  };
};

export const removeCart = item => {
  return {
    type: "REMOVE_CART",
    payload: item
  };
};

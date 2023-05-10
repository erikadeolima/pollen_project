import React, { useState } from 'react';
import storage from './Context';
import userInfo from '../untils/userInfo';
import productsInfo from '../untils/productsInfo';

function Provider({ children }) {

  const [userName, setUserName] = useState("");
  const [pollenBalance, setPollenBalance] = useState(0);
  const [orderHistory, setOrderHistory] = useState([]);
  const [products, setProducts] = useState([]);

  const getUserName = () => {
    const user = userInfo.userName;
    setUserName(user);
  };

  const getPollenBalance = () => {
    const pollen = userInfo.pollenBalance;
    setPollenBalance(pollen);
  };

  const getOrderHistory = () => {
    const orderHistory = userInfo.orderHistory;
    setOrderHistory(orderHistory);
  };

  const getProducts = () => {
    const products = productsInfo;
    setProducts(products);
  }

  const updatePollenBalance = (pollens) => {
    setPollenBalance(pollens);
  };

  const updateOrderHistory = (order) => {
    setOrderHistory(order);
    /* setOrderHistory((prevState) => {
      return {
        ...prevState,
        order
      };
    }); */
  };

  const context = {
    userName,
    pollenBalance,
    orderHistory,
    getUserName,
    getPollenBalance,
    getOrderHistory,
    updateOrderHistory,
    updatePollenBalance,
    getProducts,
    products,
  };

  return (
    <storage.Provider
      value={context}
    >
      {children}
    </storage.Provider>
  );
};

export default Provider;
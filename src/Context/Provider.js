import React, { useState } from 'react';
import storage from './Context';
import userInfo from '../untils/userInfo';
import productsInfo from '../untils/productsInfo';

function Provider({ children }) {

  const [userName, setUserName] = useState("");
  const [pollenBalance, setPollenBalance] = useState(0);
  const [orderHistory, setOrderHistory] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  const getUserName = () => {
    const user = userInfo.userName;
    setUserName(user);
  };

  const getPollenBalance = () => {
    const pollens = userInfo.pollenBalance;
    setPollenBalance(pollens);
  };

  const getOrderHistory = () => {
    const orderHistory = userInfo.orderHistory;
    setOrderHistory(orderHistory);
  };

  const getProducts = () => {
    const products = productsInfo;
    setProducts(products);
  };
  const getCartItem = () => {
    const cartItens = JSON.parse(localStorage.getItem('cart'));
    return cartItens;
  };

  const saveCartItem = (item) => {
    localStorage.setItem('cart', JSON.stringify(item));
  };

  const newItem = (item) => {
    const getCartProducts = getCartItem() || [];
    const itemAlreadySave = getCartProducts.find(
      (productItem) => productItem.id === item.id,
    );
    if (getCartProducts.length === 0) {
      setCart([item]);
      return saveCartItem([item]);
    }

    if (itemAlreadySave) {
      getCartProducts.forEach((arrayItem) => {
        if (arrayItem.id === item.id) {
          arrayItem.quantity = item.quantity;
          arrayItem.subTotal = item.subTotal;
        }
      });
      setCart(getCartProducts);
      saveCartItem(getCartProducts);
    } else {
      getCartProducts.push(item);
      setCart(getCartProducts);
      saveCartItem(getCartProducts);
    }
  };

  const context = {
    userName,
    pollenBalance,
    orderHistory,
    getUserName,
    getPollenBalance,
    getOrderHistory,
    getProducts,
    products,
    total,
    setTotal,
    cart,
    setCart,
    newItem,
    getCartItem
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
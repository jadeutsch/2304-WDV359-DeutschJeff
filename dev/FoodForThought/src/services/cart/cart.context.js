import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  const saveCart = async (food, shop, uid) => {
    try {
      const jsonValue = JSON.stringify({ restaurant: food, cart: shop });
      await AsyncStorage.setItem(`@cart-${uid}`, jsonValue);
    } catch (error) {
      console.error("Error storing", error);
    }
  };

  const loadCart = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@cart-${uid}`);
      if (value !== null) {
        const { restaurant: food, cart: shop } = JSON.parse(value);
        setRestaurant(food);
        setCart(shop);
      }
    } catch (error) {
      console.error("Error storing", error);
    }
  };

  useEffect(() => {
    if (user && user.uid) {
      loadCart(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid) {
      saveCart(restaurant, cart, user.uid);
    }
  }, [restaurant, cart, user]);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);
    setSum(newSum);
  }, [cart]);

  const add = (item, rest) => {
    if (!restaurant || restaurant.placeId !== rest.placeId) {
      setRestaurant(rest);
      setCart([item]);
      return;
    } else {
      setCart([...cart, item]);
    }
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        restaurant,
        cart,
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

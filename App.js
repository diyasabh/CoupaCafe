import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/navigations/AppNavigation";
import { CartProvider } from "./src/screens/Search/CartContext";

export default function App() {
  return (
    <CartProvider>
      <AppContainer />
    </CartProvider>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import CartScreen from "../screens/Search/CartScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LandingPage from "../screens/LandingPage";
import ItemScreen from "../screens/Item/ItemScreen";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={CategoriesScreen}
        options={{
          //tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          //tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          headerTitle: "Your Cart",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTitleStyle: {
            fontSize: 22,
            color: "#FFFFFF",
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemScreen"
          component={ItemScreen}
          options={{ headerTitle: "Modify your Selection" }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            //tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
            headerTitle: "Your Cart",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerBackTitleVisible: false,
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontSize: 22,
              color: "#FFFFFF",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;

console.disableYellowBox = true;

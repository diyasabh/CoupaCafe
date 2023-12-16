import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "@rneui/base";
import { Icon } from "@rneui/themed";
import { useCart } from "./CartContext";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  Modal,
  ScrollView,
} from "react-native";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const [orderType, setOrderType] = useState("now");
  const { cartItems, updateItemQuantity, removeItemFromCart, clearCart } =
    useCart();

  const incrementQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      updateItemQuantity(itemId, item.quantity + 1);
    }
  };

  const decrementQuantity = (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex > -1) {
      const item = cartItems[itemIndex];

      if (item.quantity > 1) {
        updateItemQuantity(itemId, item.quantity - 1);
      } else {
        // If the quantity becomes zero, remove the item from the cart
        removeItemFromCart(itemId);
      }
    }
  };

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotals = () => {
    let newSubtotal = 0;

    cartItems.forEach((item) => {
      const price = parseFloat(item.price.replace("$", ""));
      newSubtotal += price * item.quantity;
    });

    // Assuming a tax rate of 8%,
    const newTax = newSubtotal * 0.08;

    setSubtotal(newSubtotal);
    setTax(newTax);
    setTotal(newSubtotal + newTax);
  };

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  const [modalVisible, setModalVisible] = useState(false);
  const fadeAnim = new Animated.Value(0);

  const handleCheckout = () => {
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setModalVisible(false);
      fadeAnim.setValue(0);
      clearCart();
    }, 4000);
  };

  const renderItem = (item, index) => {
    return (
      <View key={index}>
        <Text style={styles.modalItemName}>
          {item.quantity} x {item.name}
        </Text>
      </View>
    );
  };
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        alwaysBounceVertical={false}
      >
        <View style={styles.orderButtons}>
          <TouchableOpacity
            style={
              orderType === "now"
                ? styles.orderButtonActive
                : styles.orderButton
            }
            onPress={() => setOrderType("now")}
          >
            <Text
              style={
                orderType === "now"
                  ? styles.orderButtonTextActive
                  : styles.orderButtonText
              }
            >
              Order For Now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              orderType === "ahead"
                ? styles.orderButtonActive
                : styles.orderButton
            }
            onPress={() => setOrderType("ahead")}
          >
            <Text
              style={
                orderType === "ahead"
                  ? styles.orderButtonTextActive
                  : styles.orderButtonText
              }
            >
              Order Ahead
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.location}>
            <Text style={styles.locationHeader}>Pickup Location</Text>
            <Text style={styles.addressText1}>Stanford GSB</Text>
            <Text style={styles.addressText2}>
              11 Lytton Ave, Palo Alto CA 94305
            </Text>
          </View>
          <Button
            buttonStyle={{
              width: "45%",
              backgroundColor: "#FAEE89",
              borderRadius: 30,
            }}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "#00F",
            }}
            disabledTitleStyle={{ color: "#000" }}
            linearGradientProps={null}
            icon={
              <Icon name="edit" type="font-awesome" color="#000000" size={24} />
            }
            iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
          />
        </View>

        <Image
          source={require("../../../assets/line.png")}
          style={styles.divider}
        />
        {cartItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemType}>
                {item.size}, {item.temperature}
              </Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => decrementQuantity(item.id)}
                style={styles.quantityButton}
              >
                {/* <Text style={styles.quantButtonText}>-</Text> */}
                <MaterialCommunityIcons
                  name="minus-circle"
                  size={25}
                  color="#FAEE89"
                />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => incrementQuantity(item.id)}
                style={styles.quantityButton}
              >
                {/* <Text style={styles.quantButtonText}>+</Text> */}
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={25}
                  color="#FAEE89"
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <Image
          source={require("../../../assets/line.png")}
          style={styles.finalDivider}
        />

        <View style={styles.couponContainer}>
          <TextInput
            placeholder="Enter Coupon Code here"
            placeholderTextColor="gray"
            style={styles.couponInput}
          />
        </View>

        <View style={styles.location}>
          <Text style={styles.locationHeader}>Payment Summary</Text>
          <View style={styles.payline}>
            <Text style={styles.summaryText}>Subtotal</Text>
            <Text style={styles.summaryText}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.payline}>
            <Text style={styles.summaryText}>Tax</Text>
            <Text style={styles.summaryText}>${tax.toFixed(2)}</Text>
          </View>
          <Image
            source={require("../../../assets/line.png")}
            style={styles.divider}
          />

          <View style={styles.payline}>
            <Text style={styles.summaryTotalText}>Total Payment</Text>
            <Text style={styles.summaryTotal}>${total.toFixed(2)}</Text>
          </View>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <View style={{}}> */}
              <MaterialCommunityIcons
                name="check-circle"
                size={55}
                color="green"
              />
              <Text style={styles.modalText}>Order Complete</Text>

              {cartItems.map(renderItem)}
              <View
                style={{
                  //borderWidth: 2,
                  //borderColor: "red",
                  position: "absolute",
                  bottom: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  height: "35%",
                }}
              >
                <Text style={styles.modalText}>Total: ${total.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </Modal>

        {/* <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}> */}
        <TouchableOpacity
          style={[
            styles.checkoutButton,
            cartItems.length === 0 && styles.checkoutButtonDisabled,
          ]}
          onPress={handleCheckout}
          disabled={cartItems.length === 0}
        >
          <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimer}>
          *Your order will be ready min. 5-15 min after checkout
        </Text>
      </ScrollView>
    </View>
  );
}

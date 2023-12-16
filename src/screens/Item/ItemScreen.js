import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { useCart } from "../Search/CartContext";

import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ItemScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedTemperature, setSelectedTemperature] = useState("Hot");

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleTemperatureSelection = (temp) => {
    setSelectedTemperature(temp);
  };

  //const { navigation } = props;
  const [value, setValue] = useState("");

  const [isLiked, setIsLiked] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#000000",
      },
      headerTitleStyle: {
        fontSize: 14,
      },
      headerShadowVisible: false,
      headerBackTitleVisible: false,
      headerTintColor: "#FFFFFF",
      headerTitle: "",

      headerRight: () => (
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <MaterialCommunityIcons
            name={isLiked ? "heart" : "heart-outline"}
            size={25}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isLiked, item]);

  const handleAddToCart = () => {
    const itemToAdd = {
      ...item,
      size: selectedSize,
      temperature: selectedTemperature,
    };
    addToCart(itemToAdd);
    setButtonText("ADDED");
    setShowCheckmark(true);

    setTimeout(() => {
      setButtonText("ADD TO CART");
      setShowCheckmark(false);
    }, 2000);
  };

  const [buttonText, setButtonText] = useState("ADD TO CART");
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleBuyNow = () => {
    navigation.navigate("CartScreen"); // Replace "CartScreen" with the actual name of your cart screen in the navigation stack
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.imgContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.lineStyle} />
          <View style={styles.optionsContainer}>
            <Text style={styles.optionLabel}>I'll take a...</Text>
            <View style={styles.optionButtonsContainer1}>
              <TouchableOpacity
                style={
                  selectedSize === "Small"
                    ? styles.selectedOptionButton
                    : styles.optionButton
                }
                onPress={() => handleSizeSelection("Small")}
              >
                <Text
                  style={
                    selectedSize === "Small"
                      ? styles.selectedButtonText1
                      : styles.buttonText1
                  }
                >
                  Small
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selectedSize === "Medium"
                    ? styles.selectedOptionButton
                    : styles.optionButton
                }
                onPress={() => handleSizeSelection("Medium")}
              >
                <Text
                  style={
                    selectedSize === "Medium"
                      ? styles.selectedButtonText1
                      : styles.buttonText1
                  }
                >
                  Medium
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selectedSize === "Large"
                    ? styles.selectedOptionButton
                    : styles.optionButton
                }
                onPress={() => handleSizeSelection("Large")}
              >
                <Text
                  style={
                    selectedSize === "Large"
                      ? styles.selectedButtonText1
                      : styles.buttonText1
                  }
                >
                  Large
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.optionLabel}>I'll have it...</Text>
            <View style={styles.optionButtonsContainer2}>
              <TouchableOpacity
                style={
                  selectedTemperature === "Hot"
                    ? styles.selectedOptionButtonBig
                    : styles.optionButtonBig
                }
                onPress={() => handleTemperatureSelection("Hot")}
              >
                <View style={styles.descContainer}>
                  <MaterialCommunityIcons
                    name="fire"
                    size={20}
                    color={
                      selectedTemperature === "Hot" ? "#000000" : "#FAEE89"
                    }
                  />
                  <Text
                    style={
                      selectedTemperature === "Hot"
                        ? styles.selectedButtonText2
                        : styles.buttonText2
                    }
                  >
                    Hot
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selectedTemperature === "Iced"
                    ? styles.selectedOptionButtonBig
                    : styles.optionButtonBig
                }
                onPress={() => handleTemperatureSelection("Iced")}
              >
                <View style={styles.descContainer}>
                  <MaterialCommunityIcons
                    name="snowflake"
                    size={20}
                    color={
                      selectedTemperature === "Iced" ? "#000000" : "#FAEE89"
                    }
                  />
                  <Text
                    style={
                      selectedTemperature === "Iced"
                        ? styles.selectedButtonText2
                        : styles.buttonText2
                    }
                  >
                    Iced
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.requestLabel}>Any other requests?</Text>
          <TextInput
            style={styles.requestInput}
            placeholder="Add special preferences here..."
            placeholderTextColor="#8B8C8D" // Adjust placeholder text color as needed
            // Add other TextInput props as needed
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={handleBuyNow}>
          <Text style={styles.footerButtonText}>GO TO CART</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleAddToCart}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.footerButtonText}>{buttonText}</Text>
            {showCheckmark && (
              <View
                style={{
                  marginLeft: "4%",
                  marginBottom: "1%",
                }}
              >
                <MaterialCommunityIcons
                  name="check-circle"
                  size={16}
                  color="green"
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemScreen;

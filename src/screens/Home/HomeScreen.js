import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import haversine from "haversine";
import { categories } from "../../data/dataArrays";

const LocationDropdown = ({
  isVisible,
  onClose,
  onSelectLocation,
  userLocation,
}) => {
  const landmarks = [
    { name: "Stanford GSB", latitude: 37.4275, longitude: -122.1697 },
    { name: "Stanford Y2E2", latitude: 37.4303, longitude: -122.173 },
    { name: "Stanford Green Library", latitude: 37.4275, longitude: -122.1668 },
  ];

  const calculateDistance = (landmarkCoords) => {
    const start = {
      latitude: userLocation.coords.latitude,
      longitude: userLocation.coords.longitude,
    };

    const end = {
      latitude: landmarkCoords.latitude,
      longitude: landmarkCoords.longitude,
    };

    return haversine(start, end, { unit: "mile" }).toFixed(2); // returns distance in miles
  };

  return (
    <Modal
      animationIn="fadeIn"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      animationOut="fadeOut"
    >
      <View style={styles.dropdownContainer}>
        {landmarks.map((landmark, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dropdownItem}
            onPress={() => onSelectLocation(landmark.name)}
          >
            {/* <Text style={styles.dropdownText}>{location}</Text> */}
            <Text style={styles.dropdownText}>{landmark.name}</Text>
            <Text style={styles.distanceText}>
              {userLocation
                ? `${calculateDistance(landmark)} miles away`
                : "Calculating..."}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

export default function HomeScreen(props) {
  const navigation = useNavigation();

  const onPressItem = (item) => {
    navigation.navigate("ItemScreen", { item: item });
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Stanford Y2E2");

  const onSelectLocation = (landmark) => {
    setSelectedLocation(landmark);
    setDropdownVisible(false);
  };

  //const { navigation } = props;
  const [value, setValue] = useState("");

  const [searchValue, setSearchValue] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const handleSearch = useCallback((text) => {
    setSearchValue(text);
    if (text === "") {
      setFilteredCategories(categories);
    } else {
      const filteredData = categories.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCategories(filteredData);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#000000",
      },
      headerTitle: () => (
        <View style={{ alignItems: "center" }}>
          {/* Header */}
          <TouchableOpacity onPress={() => setDropdownVisible(true)}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>
                Pickup at
                <Text> </Text>
                <Text style={styles.selectedLocationText}>
                  {selectedLocation}
                </Text>
              </Text>
              <MaterialCommunityIcons
                name="chevron-down"
                color="#FAEE89"
                size={16}
              />
            </View>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, value, dropdownVisible, selectedLocation]);

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      // Check if permissions are already granted
      const { status: existingStatus } =
        await Location.getForegroundPermissionsAsync();
      let finalStatus = existingStatus;

      // Only ask if permissions have not already been determined, because
      // iOS won't necessarily prompt the user a second time.
      if (existingStatus !== "granted") {
        // No permission to access location was granted
        const { status } = await Location.requestForegroundPermissionsAsync();
        finalStatus = status;
      }

      // If no permission, exit the function
      if (finalStatus !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      // Get the location
      try {
        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setUserLocation(location);
      } catch (error) {
        console.error(error);
      }
    };

    getLocation();
  }, []);

  const findItemById = (items, id) => {
    return items.find((item) => item.id === id);
  };

  const vanillaFrappeDetails = findItemById(categories, 4);
  const cappuccinoDetails = findItemById(categories, 6);
  const spicyMayaMochaDetails = findItemById(categories, 5);

  return (
    <ScrollView
      style={styles.scrollViewStyle}
      contentContainerStyle={styles.container}
      //bounces={true}
      //alwaysBounceVertical={true}
    >
      <LocationDropdown
        isVisible={dropdownVisible}
        onClose={() => setDropdownVisible(false)}
        onSelectLocation={onSelectLocation}
        userLocation={userLocation}
      />

      <View style={styles.coupaContainer}>
        <Image
          source={require("../../../assets/coupa_cafe-font.png")}
          style={styles.coupaLogo}
        ></Image>
      </View>
      <View style={styles.recommendationContainer}>
        <Text style={styles.headingTopLeft}>
          Try a staff recommendation today
        </Text>
        <Text style={styles.headingText}>{spicyMayaMochaDetails.name}</Text>
        <Text style={styles.headingTextBottom}>
          {spicyMayaMochaDetails.description}
        </Text>
        <View style={styles.recBottomContainer}>
          <ImageBackground
            source={spicyMayaMochaDetails.image}
            style={styles.recImageBg}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => onPressItem(spicyMayaMochaDetails)}
              //onPress={() => navigation.navigate("ItemScreen")}
            >
              <Text style={styles.buttonText}>I'LL TRY IT!</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>

      {/* Favorites section */}
      <View style={styles.favouriteItemBigContainer}>
        <Text style={styles.favText}>...Or reorder one of your favorites!</Text>
        <View style={styles.favContainerInner}>
          <View style={styles.favoriteItemContainer}>
            <Text style={styles.favNameText}>{vanillaFrappeDetails.name}</Text>
            <Text>Last Order: {vanillaFrappeDetails.lastOrder}</Text>
            <ImageBackground
              source={vanillaFrappeDetails.image}
              style={styles.favImageBg}
            >
              <TouchableOpacity
                style={styles.favButton}
                onPress={() => onPressItem(vanillaFrappeDetails)}
              >
                <Text style={styles.buttonText}>ORDER AGAIN</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.favoriteItemContainer}>
            <Text style={styles.favNameText}>{cappuccinoDetails.name}</Text>
            <Text>Last order: {cappuccinoDetails.lastOrder}</Text>
            <ImageBackground
              source={cappuccinoDetails.image}
              style={styles.favImageBg}
            >
              <TouchableOpacity
                style={styles.favButton}
                onPress={() => onPressItem(cappuccinoDetails)}
              >
                <Text style={styles.buttonText}>ORDER AGAIN</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </View>
      <View style={{ height: "20%" }}></View>
      {/* </ScrollView> */}
    </ScrollView>
  );
}

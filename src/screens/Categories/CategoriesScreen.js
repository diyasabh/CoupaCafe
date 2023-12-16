import React, { useLayoutEffect, useState, useCallback } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Pressable,
} from "react-native";
import styles from "./styles";
import { categories } from "../../data/dataArrays";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function CategoriesScreen(props) {
  const { navigation } = props;
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

  // Configure the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#000000", // Set your desired color here
        //paddingVertical: 20,
      },
      headerTitle: () => (
        <View style={{ alignItems: "center" }}>
          {/* Header */}
          <View style={styles.searchContainer}>
            <Image
              style={styles.searchIcon}
              source={require("../../../assets/icons/search.png")}
            />
            <TextInput
              style={styles.searchInput}
              onChangeText={handleSearch}
              value={searchValue}
              placeholder="Search menu items..."
              placeholderTextColor="#8B8C8D"
              clearButtonMode="while-editing"
            />
            {value ? (
              <Pressable onPress={() => setValue("")}>
                <Image
                  style={styles.clearIcon}
                  source={require("../../../assets/icons/close.png")}
                />
              </Pressable>
            ) : null}
          </View>
        </View>
      ),
    });
  }, [navigation, searchValue, handleSearch]);

  const onPressCategory = (item) => {
    navigation.navigate("ItemScreen", { item: item });
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight onPress={() => onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <View style={styles.leftContainer}>
          <Image style={styles.categoriesPhoto} source={item.image} />
          <Text style={styles.categoriesName} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <MaterialCommunityIcons name="plus-box" color="#FDD700" size={25} />
          <Text style={styles.categoriesName}>{item.price}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  const renderEmptyComponent = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>No items found...</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredCategories}
        renderItem={renderCategory}
        keyExtractor={(item) => `${item.id}`}
        bounces={false}
        style={{ backgroundColor: "#000000" }}
        ListEmptyComponent={renderEmptyComponent}
        //numColumns={2}
      />
    </View>
  );
}

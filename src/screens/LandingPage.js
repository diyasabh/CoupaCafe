import React, { useEffect, useRef } from "react";
import { Image, View, Text, StyleSheet, Animated } from "react-native";
//import * as React from "react";
// import { Button } from "@rneui/base";
// //import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
// //import materia
// import LinearGradient from "react-native-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function LandingPage({ navigation }) {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    function startAnimation(dot, delay) {
      dot.setValue(0);
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(dot, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(dot, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        startAnimation(dot, delay);
      });
    }

    startAnimation(dot1, 0);
    startAnimation(dot2, 400);
    startAnimation(dot3, 800);

    const timer = setTimeout(() => {
      navigation.navigate("MainApp");
    }, 3000);

    return () => {
      clearTimeout(timer);
      Animated.timing(dot1).stop();
      Animated.timing(dot2).stop();
      Animated.timing(dot3).stop();
    };
  }, [dot1, dot2, dot3, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/coupa_logo.png")}
        style={styles.logo}
      />
      <View style={{ flexDirection: "row", marginTop: "20%" }}>
        <Animated.Text style={{ ...styles.dot, opacity: dot1 }}>
          •
        </Animated.Text>
        <Animated.Text style={{ ...styles.dot, opacity: dot2 }}>
          •
        </Animated.Text>
        <Animated.Text style={{ ...styles.dot, opacity: dot3 }}>
          •
        </Animated.Text>
      </View>
      {/* <Text style={styles.loadingText}>Loading...</Text> */}
    </View>
  );
}
export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  loadingText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  logo: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
  dot: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 2,
  },
});

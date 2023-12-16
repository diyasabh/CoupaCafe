import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  categoriesItemContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    //justifyContent: "flex-start",
    alignItems: "left",
    justifyContent: "center",
    backgroundColor: "#000000",
    justifyContent: "space-around",
    flexGrow: 1,
    //paddingBottom: 12,
    borderWidth: 2,
    //borderColor: "red",
    borderBottomColor: "#FAEE89",
    padding: 10,
    width: "100%",
    //height: "30%",
    flexDirection: "row",
  },
  overallContainer: {
    backgroundColor: "#000000",
    //alignItems: "center",
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
    // If you want the container to be full-screen, adjust padding as needed
  },
  emptyListText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  leftContainer: {
    //width: "60%",
    flex: 3,
    alignItems: "center",
    height: "100%",
  },
  rightContainer: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
  categoriesPhoto: {
    width: "100%",
    height: 150,
    //height: "100%",
    //height: 155,
    borderRadius: 20,
    borderColor: "#FAEE89",
    borderWidth: 2,
  },
  categoriesName: {
    //flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    //textAlign: "center",
    color: "#FFFFFF",
    marginTop: "4%",
  },
  // categoriesInfo: {
  //   marginTop: 3,
  //   marginBottom: 5,
  // },
  searchContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#313131",
    borderRadius: 15,
    width: 300,
    //width: "88%",
    justifyContent: "space-around",
    marginBottom: "4%",
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#8B8C8D",
  },
  searchInput: {
    backgroundColor: "#313131",
    color: "#8B8C8D",
    width: 240,
    height: 45,
  },
});

export default styles;

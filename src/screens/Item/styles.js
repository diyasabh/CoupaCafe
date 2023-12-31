import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
    //resizeMode: "cover",
    borderRadius: 20,
    //borderColor: "FDD700",
    //borderWidth: 4,
  },
  contentContainer: {
    padding: 16,
  },
  checkmarkContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -30,
    marginTop: -30,
  },
  imgContainer: {
    height: "55%",
    width: "85%",
    marginTop: "3%",
    alignSelf: "center",
    borderColor: "#FDD700",
    borderWidth: 1,
    borderRadius: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    //marginBottom: 8,
    alignSelf: "center",
  },
  description: {
    fontSize: 14,
    color: "#FFFFFF",
    alignSelf: "center",
    //marginBottom: "4%",
  },
  lineStyle: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 2,
    marginVertical: "6%",
  },
  price: {
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: "center",
    fontWeight: "600",
    marginBottom: "2%",
  },
  descContainer: {
    flexDirection: "row",
    // //borderColor: "red",
    // borderWidth: 2,
  },
  optionsContainer: {
    //marginBottom: 16,
    //borderColor: "red",
    //borderWidth: 2,
    height: "52%",
  },

  optionLabel: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: "4%",
    fontWeight: "600",
  },
  optionButtonsContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    //borderColor: "red",
    borderWidth: 2,
    height: "24%",
    marginBottom: "6%",
  },
  selectedOptionButton: {
    backgroundColor: "#FAEE89",
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#C67C4E",
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  optionButtonsContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    //borderColor: "red",
    borderWidth: 2,
    height: "24%",
  },
  optionButton: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FAEE89",
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  optionButtonBig: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FAEE89",
    width: "48%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedOptionButtonBig: {
    backgroundColor: "#FAEE89",
    borderColor: "#C67C4E",
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    width: "48%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText1: {
    fontSize: 16,
    color: "#FAEE89",
  },
  selectedbuttonText1: {
    fontSize: 16,
    color: "#000000",
  },
  buttonText2: {
    fontSize: 16,
    color: "#FAEE89",
    marginLeft: "3%",
  },
  selectedbuttonText2: {
    fontSize: 16,
    color: "#000000",
    marginLeft: "3%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  footerButton: {
    backgroundColor: "#FDD700",
    padding: 16,
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 4,
  },
  footerButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  requestLabel: {
    fontSize: 18,
    color: "#000000",
    marginBottom: 8,
    fontWeight: "600",
  },
  requestInput: {
    backgroundColor: "#FFFFFF",
    borderColor: "#4A90E2",
    borderWidth: 1,
    borderRadius: 20,
    color: "#000000",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  requestLabel: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 8,
    fontWeight: "600",
  },
  requestInput: {
    backgroundColor: "#FFF",
    borderColor: "#4A90E2",
    borderWidth: 1,
    borderRadius: 20,
    color: "#000000",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {},
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    //paddingTop: "16%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    //marginBottom: "5%",
    textAlign: "center",
    //marginTop: 20,
  },

  orderButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginBottom: "10%",
    padding: "8%",
    padding: "8%",
  },

  orderButtonActive: {
    backgroundColor: "#FAEE89",
    padding: "3%",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#C67C4E",
    // width: 153.5,
    // height: 40,
    alignItems: "center",
    flex: 1,
    marginLeft: "2%",
  },

  orderButton: {
    backgroundColor: "transparent",
    padding: "3%",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FAEE89",
    flex: 1,
    marginLeft: "2%",
    // width: "36%",
    // height: 40,
    alignItems: "center",
  },

  orderButtonText: {
    color: "#FAEE89",
    fontSize: 16,
    fontWeight: "bold",
  },

  orderButtonTextActive: {
    color: "#000",
    fontSize: 16,
  },

  location: {
    paddingHorizontal: "10%",
    // borderWidth: 3,
    borderColor: "#fff",
  },

  locationHeader: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    color: "#FAEE89",
    //paddingBottom: "10%",
    marginBottom: "5%",
    //alignSelf: "center",
  },

  addressText1: {
    color: "#fff",
    fontSize: 14,
    marginBottom: "5%",
  },

  addressText2: {
    color: "#fff",
    fontSize: 14,
    marginBottom: "5%",
  },

  divider: {
    width: "100%",
    height: ".5%",
    marginTop: "3%",
  },
  finalDivider: {
    width: "100%",
    height: ".5%",
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 0,
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },

  itemImage: {
    width: "15%",
    //height: "36%",
    //padding: "70%",
    borderRadius: 20,
    aspectRatio: 1,
  },
  itemDetails: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "3%",
  },
  itemName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemType: {
    color: "#fff",
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    padding: 10,
  },

  quantityButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantButtonText: {
    color: "#FAEE89",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantity: {
    color: "#fff",
    fontSize: 16,
    marginHorizontal: "6%",
  },

  couponContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: "4%",
    borderColor: "#FAEE89",
    borderWidth: 1,
    borderRadius: 10,
    width: "70%",
    alignSelf: "center",
    marginVertical: "5%",
  },

  couponInput: {
    flex: 1,
    color: "white",
    marginLeft: 10,
  },

  paymentSummary: {
    padding: "8%",
  },

  payline1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  payline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5%",
  },

  summaryText: {
    color: "#fff",
    fontSize: 14,
  },
  summaryTotalText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: "3%",
  },
  summaryTotal: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },

  checkoutButton: {
    backgroundColor: "#FDD700",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
    alignItems: "center",
  },

  checkoutButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },

  disclaimer: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FDD700",
    borderRadius: 20,
    padding: "3%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "60%",
    height: "28%",
  },
  modalItemName: {
    fontWeight: "400",
    marginBottom: "2%",
  },
  modalText: {
    marginTop: "4%",
    marginBottom: "2%",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },

  checkoutButtonDisabled: {
    backgroundColor: "#cccccc", // A grey color to indicate the button is disabled
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
    alignItems: "center",
  },
  hideButton: {
    backgroundColor: "#000000",
    padding: 10,
    elevation: 2,
    borderRadius: 15,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    position: "absolute",
    bottom: "-19%",
    alignSelf: "center",
  },
});

export default styles;

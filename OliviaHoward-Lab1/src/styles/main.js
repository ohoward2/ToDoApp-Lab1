import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F8",
  },

  header: {
    backgroundColor: "#009FB7",
    justifyContent: "left",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 25,
    paddingBottom: 5,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    paddingLeft: 10,
  },
});

export default styles;

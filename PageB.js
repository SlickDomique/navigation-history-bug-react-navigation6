import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";

export default function PageB() {
  return (
    <View style={styles.container}>
      <Navigation />
      <Text>Page B</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

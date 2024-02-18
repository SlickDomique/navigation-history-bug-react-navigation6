import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";

export default function PageA() {
  return (
    <View style={styles.container}>
      <Navigation />
      <Text>Page A</Text>
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

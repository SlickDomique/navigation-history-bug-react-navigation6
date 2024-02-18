import { Link } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function Navigation() {
  return (
    <View style={styles.container}>
      <Link to="/">Home</Link>
      <Link to="/PageA">PageA</Link>
      <Link to="/PageB">PageB</Link>
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

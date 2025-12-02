import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="GESSURANCE" />

      <View style={{ padding: 20 }}>
        <Text>Bienvenue dans mon app !</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
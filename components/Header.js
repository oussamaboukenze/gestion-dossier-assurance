import { Button, StyleSheet, Text, View } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Button title="≡" onPress={() => alert("Menu")} />

      <Text style={styles.title}>{title}</Text>

      <View style={{ width: 40 }} /> 
      {/* espace pour équilibrer le header */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#1E90FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
});

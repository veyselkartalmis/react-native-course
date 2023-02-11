import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another peace of text!</Text>
      </View>
      <Text style={{ margin: 16, borderWidth: 2, borderColor: "red", padding: 16}}>
        Hello World!
      </Text>
      <Button title="Tap Me!" />
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

  dummyText: {
    margin: 16,
    padding: 16,
    borderColor: "black",
    borderWidth: 2,
  }
});

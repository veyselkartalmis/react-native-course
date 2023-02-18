import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [enteredText, setEnteredText] = useState("");

    function goalInputHandler(enteredText) {
      setEnteredText(enteredText);
    }

    function addGoalHandler() {
      console.log(enteredText);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <Text>List of goals</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },

    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },

    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        padding: 8,
        marginRight: 8,
    },

    goalsContainer: {
        flex: 5,
    },
});

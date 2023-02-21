import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
    const [enteredText, setEnteredText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredText);
        setEnteredText("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredText}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
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
        borderRadius: 6,
        width: "70%",
        padding: 8,
        marginRight: 8,
    },
});

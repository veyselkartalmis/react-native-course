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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },

    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 6,
        width: "100%",
        padding: 8,
    },

    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },

    button: {
        width: 100,
        marginHorizontal: 8,
    },
});

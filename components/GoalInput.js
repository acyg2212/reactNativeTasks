import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native'
import { useState } from 'react'


function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goalTarget.png')} />
                <TextInput style={styles.textInput} placeholder='Your course goal!' value={enteredGoalText} onChangeText={goalInputHandler} />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="green" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        padding: 8,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '70%',
        padding: 16,
        width: "100%",
        color: '#120438',
        borderRadius: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});
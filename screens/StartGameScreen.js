import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

const StartGameScreen = props => {
    return (
        <View style={styles.screenView}> 
            <Text style={styles.title}> Start Your Game!</Text>
            <View style={ styles.inputContainer }>
                <Text>Select a Number </Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title='Reset'/>
                    <Button title='Confirm'/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        elevation: 5, // for android card effect
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})

export default StartGameScreen

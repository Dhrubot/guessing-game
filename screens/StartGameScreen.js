import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const StartGameScreen = () => {
    return (
        <View style={styles.screenView}> 
            <Text> Start Your Game!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    }
})

export default StartGameScreen

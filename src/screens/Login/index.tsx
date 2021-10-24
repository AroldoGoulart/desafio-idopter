
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useColors } from '../../utils/useColors'

function LoginScreen() {
    const colors = useColors()

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background.secondary
        }}>
            <View style={{
                marginVertical: 100,
                flex: 1,
                backgroundColor: colors.background.main,
                justifyContent: 'center',
            }}>
                <Text> teste</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default LoginScreen
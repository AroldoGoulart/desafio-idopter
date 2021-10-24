import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';

const Stack = createNativeStackNavigator();

function Routes() {
    const [initialRoute, setInitialRoute] = useState('Login')
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
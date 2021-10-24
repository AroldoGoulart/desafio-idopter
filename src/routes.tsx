import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/Login';
import ChampionsScreen from './screens/Champions';
import { useAuth } from './contexts/auth';
import { Alert } from 'react-native';

const Stack = createNativeStackNavigator();

function Routes() {
    const { user: { signed } } = useAuth()
    const [initialRoute] = useState<"Login" | "Champions">(!signed ? 'Login' : "Champions")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setMounted(true)
        }, 2000)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Champions" component={ChampionsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
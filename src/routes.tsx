import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/Login';
import ChampionsScreen from './screens/Champions';
import { useAuth } from './contexts/auth';
import { ActivityIndicator, Alert, View } from 'react-native';
import { useColors } from './utils/useColors';

const Stack = createNativeStackNavigator();

function Routes() {
    const { user: { signed }, loading } = useAuth()
    const colors = useColors()

    const getInitialRoute = () => {
        return !signed ? 'Login' : 'Champions'
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color={colors.primary[500]} />
            </View>
        );
    }

    const initial = getInitialRoute()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initial}>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Champions" component={ChampionsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
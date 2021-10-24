
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContextData, UserType, WinnersType } from "../types/general";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserType>(userInitialState);
    const [winners, setWinners] = useState<WinnersType[] | []>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        loadStorageData();
    }, []);

    useEffect(() => {
        if (!!user) {
            setLoading(false)
        }
    }, [user])

    async function loadStorageData() {
        const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
        const storagedWinners = await AsyncStorage.getItem('@RNAuth:winners');

        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
        }
        if (storagedWinners) {
            setWinners(JSON.parse(storagedWinners))
        }
    }

    async function saveWinners(wins: WinnersType[]) {
        setWinners(wins)
        await AsyncStorage.setItem('@RNAuth:winners', JSON.stringify(wins));
    }

    async function saveUser(newUser: UserType) {
        if (newUser.token) {
            newUser.signed = true
        }
        setUser(newUser)
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(newUser));
    }

    async function deleteUser() {
        setUser(userInitialState)
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(userInitialState));
    }

    return (
        <AuthContext.Provider value={{ user, loading, saveUser, deleteUser, winners, saveWinners }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

const userInitialState = {
    signed: false,
    token: '',
    email: ''
}



export default AuthContext;
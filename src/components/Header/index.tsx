import React, { useEffect } from "react"
import { View, Text, Alert, BackHandler } from "react-native"
import { useColors } from "../../utils/useColors";
import Icon from "react-native-vector-icons/FontAwesome5"
import { CommonActions, useNavigation } from "@react-navigation/core";
import { useAuth } from "../../contexts/auth";
import { useStylesHeader } from "./useStylesHeader";

interface HeaderProps {
    title: string
}

function Header(props: HeaderProps) {
    const { title } = props
    const { deleteUser } = useAuth()
    const navigation = useNavigation()
    const styles = useStylesHeader()
    const colors = useColors()

    const exit = () => {
        const exitScreen = () => {
            deleteUser()
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'Login' },
                    ],
                })
            );
        }
        Alert.alert("Opa, campeão", "Você quer sair da conta ?",
            [
                { text: "Fechar app", onPress: () => BackHandler.exitApp() },
                { text: 'Sim', onPress: exitScreen },
                { text: "Não", onPress: () => null },

            ])
        return true
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => exit()
        );

        return () => backHandler.remove();
    }, [])

    const handlerPress = () => {
        exit()
    }

    return (
        <View style={styles.container}>
            <Icon name="arrow-left" size={20} color={colors.darkText} onPress={handlerPress} />
            <Text style={styles.textRoute}>
                {title}
            </Text>
        </View>
    )
}

export default Header
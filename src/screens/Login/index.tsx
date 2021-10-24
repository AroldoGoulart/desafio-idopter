
import React, { useState } from 'react'
import { ImageBackground, Text, TextInput, View } from 'react-native'
import { useColors } from '../../utils/useColors'
import FontConfig from '../../utils/fontConfig'
import Button from '../../components/Button'

import BackgroundImage2 from '../../../assets/images/background2.jpg'
import Icon from "react-native-vector-icons/FontAwesome5"
import { login_email } from '../../utils/services'
import { addErrorLine, validEmail } from '../../utils/helpers'
import { useAuth } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/core'
import { useStylesLogin } from './useStylesLogin'

function LoginScreen() {
    const colors = useColors()
    const { fontFamilies: { primarySemiBold } } = FontConfig
    const { saveUser } = useAuth()
    const navigation = useNavigation()
    const styles = useStylesLogin()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorText, setErrorText] = useState<string>('')
    const [passwordVisible, setPasswordVisible] = useState<boolean>(true)
    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handlerEmail = (text: string) => {
        setEmail(text)
    }

    const handlerPassword = (text: string) => {
        setPassword(text)
    }

    const RenderText = (text: string) => {
        return (
            <Text style={{
                fontFamily: primarySemiBold,
                fontSize: 16,
                color: colors.darkText
            }}>
                {text}
            </Text>
        )
    }
    const resetErrors = () => {
        setEmailError(false)
        setPassError(false)
        setErrorText('')
    }
    const handlerLogin = async () => {
        setLoading(true)
        resetErrors()
        let localError = ''

        if (!validEmail(email)) {
            setEmailError(true)
            localError = addErrorLine(localError, "insira um email valido")
        }
        if (password.length <= 0) {
            setPassError(true)
            localError = addErrorLine(localError, "insira uma senha")
        }

        if (localError != '') {
            setErrorText(localError)
            setLoading(false)
            return
        }

        const { token, error, message } = await login_email(email, password)
        if (error) {
            localError = addErrorLine(localError, message)
            setErrorText(localError)
            setLoading(false)
            return
        }

        saveUser({
            token,
            email,
        })

        setLoading(false)

        //@ts-ignore
        navigation.navigate("Champions")
    }

    return (
        <ImageBackground
            source={BackgroundImage2}
            resizeMode="cover"
            style={styles.container}>
            <View style={styles.containerFade} />
            <View style={styles.main}>

                <View style={styles.textView}>
                    <Text style={styles.textWelcome}>
                        Bem vindo, {''}
                        <Text style={styles.textMain}>
                            jogador !
                        </Text>
                    </Text>
                </View>


                <View style={styles.loginContainer}>
                    {RenderText("Usuario")}
                    <TextInput
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCompleteType="email"
                        placeholder="Digite seu email"
                        value={email}
                        style={[styles.defaultTouchEmail, emailError ? styles.emailError : { color: colors.darkText }]}
                        textAlign='left'
                        onChangeText={handlerEmail}
                    />

                    {RenderText("Senha")}
                    <View style={[styles.defaultViewPass, passError ? styles.viewPassError : {}]}>
                        <TextInput
                            secureTextEntry={passwordVisible}
                            textContentType="password"
                            placeholder='****'
                            value={password}
                            style={[styles.defaultTouchPass, !passError && {
                                color: colors.darkText
                            }]}
                            textAlign='left'
                            onChangeText={handlerPassword}
                        />
                        <Icon
                            onPress={() => setPasswordVisible(!passwordVisible)}
                            name={!passwordVisible ? "eye" : "eye-slash"}
                            size={14}
                            style={{ alignSelf: 'center' }}
                        />

                    </View>

                    <Text style={styles.errorText}>
                        {errorText}
                    </Text>

                    <View style={styles.viewButton}>
                        <Button
                            loading={loading}
                            title={"Entrar"}
                            onPress={handlerLogin}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground >
    )
}


export default LoginScreen

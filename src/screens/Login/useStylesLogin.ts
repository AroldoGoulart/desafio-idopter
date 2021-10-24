import { useMemo } from "react";
import { StyleSheet } from "react-native";
import FontConfig from "../../utils/fontConfig";
import { useColors } from "../../utils/useColors";

export function useStylesLogin() {
    const colors = useColors()
    const { fontFamilies: { primarySemiBold} } = FontConfig

    const styles = useMemo(() => {
        return StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.background.secondary,
            },
            containerFade: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0, 0.24)'
            },
            main: {
                backgroundColor: colors.background.main,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                width: '80%',
                borderRadius: 5,
                height: 400,
                opacity: 1
            },
            textView: {
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                flex: 1,
            },
            textWelcome: {
                fontFamily: primarySemiBold,
                fontSize: 24,
                color: colors.darkText,
                textAlign: 'center',
            },
            textMain: {
                color: colors.primary[700]
            },
            loginContainer: {
                flex: 2.5
            },
            defaultTouchEmail: {
                width: 240,
                backgroundColor: colors.textInput,
                borderRadius: 5,
                marginVertical: 6,
                fontSize: 13,
                paddingHorizontal: 10,
                fontFamily: primarySemiBold,
            },
            emailError :{
                borderWidth: 1.5,
                color: colors.error,
                borderColor: colors.error
            },
            defaultViewPass: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 240,
                backgroundColor: colors.textInput,
                borderRadius: 5,
                paddingHorizontal: 6,
            },
            viewPassError: {
                borderWidth: 1.5,
                borderColor: colors.error
            },
            defaultTouchPass: {
                fontSize: 13,
                fontFamily: primarySemiBold,
                maxWidth: 200,
                width: 200,
                color: colors.error
            },
            errorText: {
                color: colors.error,
                fontSize: 12,
                marginVertical: 5
            },
            viewButton: {
                flexDirection: 'column-reverse',
                flex: 1,
                marginVertical: 20
            }
        });
    }, [colors])
        return styles
}
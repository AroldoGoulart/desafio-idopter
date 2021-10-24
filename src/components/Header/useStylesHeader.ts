import { useMemo } from "react";
import { StyleSheet } from "react-native";
import FontConfig from "../../utils/fontConfig";
import { useColors } from "../../utils/useColors";

export function useStylesHeader() {
    const colors = useColors()
    const { fontFamilies: { primarySemiBold} } = FontConfig

    const styles = useMemo(() => {
        return StyleSheet.create({
            container:{
                backgroundColor: colors.background.main,
                height: 50,
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center'
            },
            textRoute: {
                fontFamily: primarySemiBold,
                color: colors.darkText,
                fontSize: 22,
                marginLeft: 20
            }
        });
    }, [colors])
    return styles
}
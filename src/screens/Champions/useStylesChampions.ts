import { useMemo } from "react";
import { StyleSheet } from "react-native";
import FontConfig from "../../utils/fontConfig";
import { useColors } from "../../utils/useColors";

export function useStylesChampions() {
    const colors = useColors()
    const { fontFamilies: { primarySemiBold} } = FontConfig

    const styles = useMemo(() => {
        return StyleSheet.create({
            container:{
                backgroundColor: colors.background.secondary,
                flex: 1
            },
            flatView: {
                paddingHorizontal: 15
            },
            card: {
                backgroundColor: colors.background.main,
                padding: 10,
                marginVertical: 10,
                borderRadius: 5
            },
            headingText: {
                fontFamily: primarySemiBold,
                color: colors.darkText,
                fontSize: 20
            },
            subText: {
                fontFamily: primarySemiBold,
                color: colors.darkText,
                fontSize: 15
            }
        });
    }, [colors])
    return styles
}
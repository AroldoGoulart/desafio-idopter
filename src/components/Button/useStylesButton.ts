import { useMemo } from "react";
import { StyleSheet } from "react-native";
import FontConfig from "../../utils/fontConfig";
import { useColors } from "../../utils/useColors";

export function useStylesButton() {
    const colors = useColors()
    const { fontFamilies: { primary} } = FontConfig

    const styles = useMemo(() => {
        return StyleSheet.create({
            touch: {
                backgroundColor: colors.primary[500],
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                flexDirection: 'row',
                borderRadius: 5
            },
            title: {
                textAlign: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                color: colors.darkText,
                fontFamily: primary,
                fontWeight: '700'
            },
            animatedText: {
                position: 'absolute',
                right: 20,
                color: colors.darkText,
            }
        });
    }, [colors])
    return styles
}
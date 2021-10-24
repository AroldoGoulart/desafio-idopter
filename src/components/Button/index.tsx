import React, { useEffect } from "react"
import { TouchableOpacity, Animated, Text, Easing } from "react-native"
import { useStylesButton } from "./useStylesButton";

interface ButtonProps {
    title: string,
    onPress: () => void,
    loading: boolean
}

function Button(props: ButtonProps) {
    const {
        title,
        onPress,
        loading
    } = props
    const styles = useStylesButton()

    const spinValue = new Animated.Value(0);
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', `${360}deg`]
    })

    const animationLoop = Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
        }),
        { resetBeforeIteration: true, iterations: Number.MAX_SAFE_INTEGER },
    )

    useEffect(() => {
        if (loading) {
            animationLoop.start()
            return
        }
        animationLoop.stop()
    }, [loading])

    return (
        <Animated.View>
            <TouchableOpacity
                onPress={onPress}
                style={styles.touch}
            >
                <Text style={styles.title}>
                    {title}
                </Text>
                <Animated.Text style={[styles.animatedText, {
                    transform: [{ rotate: spin }],
                    opacity: loading ? 1 : 0,
                }]}>
                    ⚽
                </Animated.Text>
            </TouchableOpacity>
        </Animated.View>

    )
}

export default Button
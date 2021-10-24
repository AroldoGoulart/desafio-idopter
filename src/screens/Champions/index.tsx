import React, { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import Header from "../../components/Header"
import { useAuth } from "../../contexts/auth"
import FontConfig from "../../utils/fontConfig"
import { get_winners } from "../../utils/services"
import { useColors } from "../../utils/useColors"
import { useStylesChampions } from "./useStylesChampions"

interface ChampionsType {

}

function ChampionsScreen(props: ChampionsType) {
    const colors = useColors()
    const { user, winners, saveWinners } = useAuth()
    const styles = useStylesChampions()
    const [localWinners, setLocalWinners] = useState(winners);

    useEffect(() => {
        getWinners()
    }, [user.token])

    const getWinners = async () => {
        const res = await get_winners(user.token)
        saveWinners(res)
        setLocalWinners(res)
    }

    return (
        <View style={styles.container}>
            <Header title="Vencedores das copa" />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={localWinners}
                style={styles.flatView}
                renderItem={(winner) => {
                    const { item } = winner
                    return (
                        <View style={styles.card}>
                            <Text style={styles.headingText}>
                                {item.country}
                            </Text>
                            <Text style={styles.subText}>
                                {item.year}
                            </Text>
                        </View>
                    )
                }} />
        </View>
    )

}
export default ChampionsScreen
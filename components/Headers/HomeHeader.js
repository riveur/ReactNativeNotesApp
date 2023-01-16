import { StyleSheet, Text, View } from "react-native"
import Button from "../Button"
import { FontAwesome } from '@expo/vector-icons'
import { primaryColor } from "../../styles"

export default function HomeHeader({ onPressSearch, onPressInfo, title }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.headerTextColor]}>{title}</Text>
            <View style={styles.actionsContainer}>
                <Button onPress={onPressSearch}>
                    <FontAwesome name='search' size={20} style={styles.headerTextColor} />
                </Button>
                <Button onPress={onPressInfo}>
                    <FontAwesome name='info-circle' size={20} style={styles.headerTextColor} />
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
        paddingTop: 24,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: primaryColor
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: '600',
        fontSize: 43,
        lineHeight: 59
    },
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    headerTextColor: {
        color: '#ffffff'
    }
})
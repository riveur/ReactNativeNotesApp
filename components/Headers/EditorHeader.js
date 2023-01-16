import { StyleSheet, View } from "react-native"
import Button from "../Button"
import { FontAwesome } from '@expo/vector-icons'
import { primaryColor } from "../../styles"

export default function EditorHeader({ onPressSave, onPressBack }) {
    return (
        <View style={styles.container}>
            <Button onPress={onPressBack}>
                <FontAwesome name="chevron-left" size={20} style={styles.headerTextColor} />
            </Button>
            <View style={styles.actionsContainer}>
                <Button onPress={onPressSave}>
                    <FontAwesome name='save' size={20} style={styles.headerTextColor} />
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
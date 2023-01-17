import { StyleSheet, View } from "react-native"
import { primaryColor } from "../../styles"

export default function HeaderBase({ children }) {
    return (
        <View style={styles.container}>
            {children}
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
    }
})
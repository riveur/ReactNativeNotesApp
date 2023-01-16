import { StyleSheet, TouchableOpacity } from "react-native";

/**
 * @returns {TouchableOpacity}
 */
export default function Button({ children, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            {children}
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3B3B3B',
        borderRadius: 15,
        width: 50,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    }
})
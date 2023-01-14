import { StyleSheet, Text, View } from "react-native";

export default function EmptyNotes({ message }) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    message: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
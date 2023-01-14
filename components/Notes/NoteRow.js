import { StyleSheet, Text, View } from "react-native";

export default function NoteRow({ item }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.item.title}</Text>
            <Text>{item.item.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    }
})
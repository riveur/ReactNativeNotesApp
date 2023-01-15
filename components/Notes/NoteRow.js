import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NoteRow({ note, onLongPress }) {
    return (
        <TouchableOpacity onLongPress={onLongPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{note.title}</Text>
                <Text>{note.description}</Text>
            </View>
        </TouchableOpacity >
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
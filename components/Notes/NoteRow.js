import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NoteRow({ note, onLongPress, onPress }) {
    return (
        <TouchableOpacity onLongPress={onLongPress} onPress={onPress}>
            <View style={{ ...styles.container, backgroundColor: note.bgColor || styles.container.backgroundColor }}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.description}>{note.description}</Text>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    itemsCenter: {
        alignItems: 'center'
    },
    justifyCenter: {},
    container: {
        backgroundColor: '#ffffff',
        paddingVertical: 22,
        borderRadius: 10,
        marginHorizontal: 25,
        marginVertical: 12.5,
        padding: 10,
        paddingStart: 45,
    },
    title: {
        fontFamily: 'Nunito',
        fontSize: 25,
        fontWeight: '400',
        lineHeight: 34,
        marginBottom: 5
    },
    description: {
        fontFamily: 'Nunito',
        fontSize: 16
    }
})
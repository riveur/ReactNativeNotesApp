import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Note } from "../../hooks/notes";

type Props = {
    note: Note;
    onLongPress: () => any;
    onPress: () => any;
};

const NoteRow: React.FC<Props> = ({ note, onLongPress, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onLongPress={onLongPress} onPress={onPress}>
            <View style={{ ...styles.container, backgroundColor: note.bgColor || styles.container.backgroundColor }}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.description}>{note.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemsCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
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
});

export default NoteRow;
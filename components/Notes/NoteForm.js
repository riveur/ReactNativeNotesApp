import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function NoteForm({ note, onSubmit }) {
    const [title, setTitle] = useState(note?.title !== undefined ? note.title : '')
    const [description, setDescription] = useState(note?.description !== undefined ? note.description : '')

    const resetNote = () => {
        setTitle('')
        setDescription('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <Text style={styles.formGroupTitle}>Title</Text>
                <TextInput style={styles.input} editable placeholder='New note...' value={title} onChangeText={(text) => { setTitle(text) }} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formGroupTitle}>Description</Text>
                <TextInput editable multiline numberOfLines={5} style={{ ...styles.input, textAlignVertical: 'top' }} placeholder='Description...' value={description} onChangeText={(text) => { setDescription(text) }} />
            </View>
            <Button title='Valider' onPress={() => {
                onSubmit({ title, description })
                resetNote()
            }} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 5
    },
    formGroup: {
        marginBottom: 15
    },
    formGroupTitle: {
        marginBottom: 5
    }
});
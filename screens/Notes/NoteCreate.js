import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid'
import { useNotes } from '../../hooks/notes';

export default function NoteCreate({ navigation }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const { notes, setNotes, writeNotes } = useNotes('notes')

    const resetNote = () => {
        setTitle('')
        setDescription('')
    }

    const onSubmit = async () => {
        writeNotes([...notes, { id: uuid.v4(), title, description }])

        resetNote()

        navigation.navigate('Home')
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
            <Button title='Valider' onPress={() => { onSubmit() }} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        marginTop: 40
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

import { forwardRef, useState } from "react";
import { StyleSheet, TextInput, ToastAndroid, View } from "react-native";
import { placeholderColor } from "../../styles";

const NoteForm = forwardRef(({ note, editState = true, onSubmit }, ref) => {
    const [title, setTitle] = useState(note?.title !== undefined ? note.title : '')
    const [description, setDescription] = useState(note?.description !== undefined ? note.description : '')

    const resetNote = () => {
        setTitle('')
        setDescription('')
    }

    const submit = () => {
        if ([title.length, description.length].includes(0)) {
            ToastAndroid.showWithGravity(
                'Ecrivez votre note !',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            )
            return
        }
        onSubmit({ title, description })
        resetNote()
    }

    if (ref) {
        ref.current = { submit }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <TextInput
                    style={{
                        ...styles.input,
                        lineHeight: 65,
                        fontSize: 48,
                        fontWeight: '400'
                    }}
                    editable={editState}
                    placeholder='Titre'
                    placeholderTextColor={placeholderColor}
                    value={title}
                    onChangeText={(text) => { setTitle(text) }}
                    multiline
                />
            </View>
            <View style={styles.formGroup}>
                <TextInput
                    style={{
                        ...styles.input,
                        textAlignVertical: 'top',
                        lineHeight: 31,
                        fontSize: 23,
                        fontWeight: '300',
                    }}
                    editable={editState}
                    placeholder='Description...'
                    placeholderTextColor={placeholderColor}
                    value={description}
                    onChangeText={(text) => { setDescription(text) }}
                    multiline
                />
            </View>
        </View >
    )
})

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        fontFamily: 'Nunito',
        width: '100%',
        color: '#ffffff'
    },
    formGroup: {
        marginBottom: 40
    }
});

export default NoteForm;
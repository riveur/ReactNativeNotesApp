import * as React from "react";
import { StyleSheet, TextInput, ToastAndroid, View } from "react-native";
import { Note } from "../../hooks/notes";
import { placeholderColor } from "../../styles";

export type FormProps = {
    ref: React.ForwardedRef<unknown>;
    note?: Note;
    editState?: boolean;
    onSubmit: ({ title, description }: { title: string, description: string }) => any
};

const NoteForm: React.FC<FormProps> = React.forwardRef(({ note, editState = true, onSubmit }, ref) => {
    const [title, setTitle] = React.useState(note?.title !== undefined ? note.title : '')
    const [description, setDescription] = React.useState(note?.description !== undefined ? note.description : '')

    const resetNote = () => {
        setTitle('')
        setDescription('')
    }

    React.useImperativeHandle(ref, () => ({
        submit: () => {
            if ([title.length, description.length].includes(0)) {
                ToastAndroid.showWithGravity(
                    'Ecrivez votre note !',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                )
                return
            }
            onSubmit.call(this, { title, description })
            resetNote()
        }
    }))

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
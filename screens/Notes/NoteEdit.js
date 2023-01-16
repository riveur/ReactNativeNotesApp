import { useContext, useRef } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import EditorHeader from "../../components/Headers/EditorHeader";
import NoteForm from "../../components/Notes/NoteForm";
import { AppContext } from "../../contexts";
import { primaryColor } from "../../styles";

export default function NoteEdit({ navigation, route }) {
    const { notes, writeNotes } = useContext(AppContext);
    const { note } = route.params;
    const formRef = useRef(null);

    const onSubmit = ({ title, description }) => {
        writeNotes([...notes.filter(n => n.id !== note.id), { ...note, title, description }])
        ToastAndroid.showWithGravity(
            'Modifié',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        )
        navigation.navigate('Home')
    }

    return (
        <>
            <EditorHeader
                onPressBack={() => navigation.goBack()}
                onPressSave={() => formRef.current.onValidateForm()}
            />
            <View style={styles.container}>
                <NoteForm ref={formRef} note={note} onSubmit={onSubmit} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 24,
        flex: 1,
        alignItems: 'center',
        backgroundColor: primaryColor
    }
})
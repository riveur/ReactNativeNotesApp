import { useContext, useRef, useState } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import EditorHeader from '../../components/Headers/EditorHeader'
import { primaryColor } from "../../styles";
import { AppContext } from '../../contexts';
import NoteForm from "../../components/Notes/NoteForm";

export default function NoteShow({ navigation, route }) {
    const { notes, writeNotes } = useContext(AppContext)
    const { note } = route.params
    const [editState, setEditState] = useState(false)
    const formRef = useRef(null)

    const onSubmit = ({ title, description }) => {
        writeNotes([...notes.filter(n => n.id !== note.id), { ...note, title, description }])
        ToastAndroid.showWithGravity(
            'Modifié',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        )
        navigation.navigate('Home')
    }

    const onPressSave = () => {
        if (!editState) {
            setEditState(!editState)
            ToastAndroid.showWithGravity(
                'Modification activé !',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            )
        } else {
            formRef?.current?.submit()
        }
    }

    const onPressBack = () => {
        if (editState) {
            setEditState(!editState)
            ToastAndroid.showWithGravity(
                'Modification annulé',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            )
        } else {
            navigation.goBack()
        }
    }

    return (
        <>
            <EditorHeader
                editState={editState}
                onPressBack={onPressBack}
                onPressSave={onPressSave}
            />
            <View style={styles.container}>
                <NoteForm ref={formRef} note={note} editState={editState} onSubmit={onSubmit} />
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
});
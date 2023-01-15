import { useContext } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import NoteForm from "../../components/Notes/NoteForm";
import { AppContext } from "../../contexts";

export default function NoteEdit({ navigation, route }) {
    const { notes, writeNotes } = useContext(AppContext);

    const { note } = route.params

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
        <View style={styles.container}>
            <NoteForm note={note} onSubmit={onSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
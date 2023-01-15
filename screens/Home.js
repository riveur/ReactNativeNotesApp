import { View, StyleSheet, Text, TouchableOpacity, FlatList, ToastAndroid } from "react-native";
import NoteRow from '../components/Notes/NoteRow'
import EmptyNotes from "../components/Notes/EmptyNotes";
import { useContext, useState } from "react";
import { AppContext } from "../contexts";
import NoteActionsModal from "../components/Notes/NoteActionsModal";

export default function Home({ navigation }) {
    const { notes, writeNotes } = useContext(AppContext)

    const [selectedNote, setSelectedNote] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onLongPressItem = (item) => {
        setIsModalOpen(!isModalOpen)
        setSelectedNote(notes.find(n => n.id === item.id))
    }

    const onCloseModal = () => {
        setIsModalOpen(!isModalOpen)
        setSelectedNote(null)
    }

    const onPressEditItem = () => {
        navigation.navigate('Notes.edit', { note: selectedNote })
    }

    const onPressDeleteItem = () => {
        writeNotes(notes.filter(n => n.id !== selectedNote.id))
        onCloseModal()
        ToastAndroid.showWithGravity(
            'Supprimé',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        )
    }

    return (
        <View style={notes.length !== 0 ? styles.container : { ...styles.container, alignItems: 'center', justifyContent: 'center' }}>
            <NoteActionsModal
                visible={isModalOpen}
                onRequestClose={() => onCloseModal()}
                onPressEdit={() => onPressEditItem()}
                onPressDelete={() => onPressDeleteItem()}
                data={selectedNote}
            />
            {notes.length !== 0 ?
                <FlatList
                    data={notes}
                    renderItem={(item) => <NoteRow note={item.item} onLongPress={() => onLongPressItem(item.item)} />}
                    keyExtractor={item => item.id}
                /> :
                <EmptyNotes message='Pas de notes pour le moment' />
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => { navigation.navigate('Notes.create') }}>
                    <Text style={{ fontSize: 32, color: '#ffffff' }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    buttonContainer: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 60,
        height: 60
    },
    addButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderRadius: 100
    },
})
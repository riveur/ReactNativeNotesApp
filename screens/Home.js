import { View, StyleSheet, TouchableOpacity, FlatList, ToastAndroid } from "react-native";
import NoteRow from '../components/Notes/NoteRow'
import EmptyNotes from "../components/Notes/EmptyNotes";
import { useContext, useState } from "react";
import { AppContext } from "../contexts";
import NoteActionsModal from "../components/Notes/NoteActionsModal";
import { FontAwesome } from '@expo/vector-icons'
import { darkColor, primaryColor } from "../styles";
import HomeHeader from "../components/Headers/HomeHeader";

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
        <>
            <HomeHeader
                title='Notes'
                onPressSearch={() => navigation.navigate('Notes.search')}
            />
            <View style={notes.length !== 0 ? styles.container : { ...styles.container, alignItems: 'center', justifyContent: 'center' }}>
                <NoteActionsModal
                    visible={isModalOpen}
                    onRequestClose={() => onCloseModal()}
                    onPressDelete={() => onPressDeleteItem()}
                    data={selectedNote}
                />
                {notes.length !== 0 ?
                    <FlatList
                        data={notes}
                        renderItem={
                            (item) => <NoteRow
                                note={item.item}
                                onLongPress={() => onLongPressItem(item.item)}
                                onPress={() => navigation.navigate('Notes.show', { note: item.item })}
                            />
                        }
                        keyExtractor={item => item.id}
                    /> :
                    <EmptyNotes message='Crée ta première note !' />
                }
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.addButton} onPress={() => { navigation.navigate('Notes.create') }}>
                        <FontAwesome name="plus" size={21} style={{ color: 'white' }} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: primaryColor
    },
    buttonContainer: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 70,
        height: 70,
    },
    addButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: darkColor,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,

        elevation: 5,
    },
})
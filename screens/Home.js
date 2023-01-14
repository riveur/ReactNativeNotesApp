import { View, StyleSheet, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useNotes } from "../hooks/notes";
import NoteRow from '../components/Notes/NoteRow'
import EmptyNotes from "../components/Notes/EmptyNotes";

export default function Home({ navigation }) {
    const { notes } = useNotes('notes')

    return (
        <SafeAreaView style={notes.length !== 0 ? styles.container : { ...styles.container, alignItems: 'center', justifyContent: 'center' }}>
            {notes.length !== 0 ?
                <FlatList
                    data={notes}
                    renderItem={(item) => <NoteRow item={item} />}
                    keyExtractor={item => item.id}
                /> :
                <EmptyNotes message='Pas de notes pour le moment' />
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => { navigation.navigate('Notes.create') }}>
                    <Text style={{ fontSize: 32, color: '#ffffff' }}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
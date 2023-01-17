import { useContext, useState } from "react";
import { AppContext } from '../../contexts'
import { FlatList, StyleSheet, Text, View } from "react-native";
import SearchField from "../../components/Notes/SearchField";
import { primaryColor } from "../../styles";
import NoteRow from "../../components/Notes/NoteRow";
import EmptyNotes from "../../components/Notes/EmptyNotes";
import NotFoundNotes from "../../components/Notes/NotFoundNotes";

export default function NoteSearch({ navigation }) {
    const [search, setSearch] = useState('')
    const [filteredNotes, setFilteredNotes] = useState([])
    const { notes } = useContext(AppContext);

    const onChange = ({ nativeEvent }) => {
        if (nativeEvent.text === '') {
            setFilteredNotes([])
        } else {
            setFilteredNotes(notes.filter(n => n.title.toLowerCase().includes(nativeEvent.text.toLowerCase())))
        }
    }

    const onPressCancel = () => {
        if (search !== '') {
            setSearch('')
            setFilteredNotes([])
        } else {
            navigation.navigate('Home')
        }
    }

    const notFound = (filteredNotes.length === 0 && search.length)

    return (
        <View style={styles.container}>
            <View style={styles.searchFieldWrapper}>
                <SearchField
                    onChange={onChange}
                    onPressCancel={onPressCancel}
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
            </View>
            {!notFound ?
                <FlatList
                    data={filteredNotes}
                    renderItem={
                        (item) => <NoteRow
                            note={item.item}
                            onLongPress={() => onLongPressItem(item.item)}
                            onPress={() => navigation.navigate('Notes.show', { note: item.item })}
                        />
                    }
                    keyExtractor={item => item.id}
                /> :
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <NotFoundNotes message='Note non trouvé. Essaye autre chose.' />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
    },
    searchFieldWrapper: {
        paddingHorizontal: 27,
        marginTop: 60,
        marginBottom: 37
    }
})
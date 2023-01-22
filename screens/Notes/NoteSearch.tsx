import { useContext, useState } from "react";
import { AppContext } from "../../contexts";
import { FlatList, NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from "react-native";
import SearchField from "../../components/Notes/SearchField";
import { primaryColor } from "../../styles";
import NoteRow from "../../components/Notes/NoteRow";
import NotFoundNotes from "../../components/Notes/NotFoundNotes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { Note } from "../../hooks/notes";

type Props = NativeStackScreenProps<RootStackParamList, 'Notes.search'>;

const NoteSearch = ({ navigation }: Props) => {
    const [search, setSearch] = useState('')
    const [filteredNotes, setFilteredNotes] = useState<Note[]>([])
    const { notes } = useContext(AppContext);

    const onChange = ({ nativeEvent }: NativeSyntheticEvent<TextInputChangeEventData>) => {
        if (nativeEvent.text === '') {
            setFilteredNotes([])
        } else {
            setFilteredNotes(
                notes.filter(n => n.title.toLowerCase().includes(nativeEvent.text.toLowerCase()))
            )
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
                            onLongPress={() => { }}
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
});

export default NoteSearch;
import { View, StyleSheet, TouchableOpacity, FlatList, ToastAndroid, Alert } from "react-native";
import NoteRow from "../components/Notes/NoteRow";
import EmptyNotes from "../components/Notes/EmptyNotes";
import { useContext, useState } from "react";
import { AppContext } from "../contexts";
import { FontAwesome } from "@expo/vector-icons";
import { darkColor, primaryColor } from "../styles";
import HomeHeader from "../components/Headers/HomeHeader";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Note } from "../hooks/notes";
import CreditModal from "../components/CreditModal";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {

    const { notes, writeNotes } = useContext(AppContext)
    const [isVisibleCreditModal, setIsVisibleCreditModal] = useState(false)

    const onLongPressItem = (item: Note) => {
        Alert.alert('Confirmation', 'Êtes-vous sûr de vouloir supprimer cet élément ?', [
            { text: 'Non' },
            { text: 'Oui', onPress: () => onPressDeleteItem(item.id) }
        ])
    }

    const onPressItem = (note: Note) => {
        navigation.navigate('Notes.show', { note })
    }

    const onPressDeleteItem = (itemId: Note['id']) => {
        writeNotes(notes.filter(n => n.id !== itemId))
        ToastAndroid.showWithGravity(
            'Supprimé',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        )
    }

    const onPressInfo = () => {
        setIsVisibleCreditModal(true)
    }

    return (
        <>
            <HomeHeader
                title='Notes'
                onPressSearch={() => navigation.navigate('Notes.search')}
                onPressInfo={onPressInfo}
            />
            <View style={notes.length !== 0 ? styles.container : { ...styles.container, alignItems: 'center', justifyContent: 'center' }}>
                {notes.length !== 0 ?
                    <FlatList
                        data={notes}
                        renderItem={
                            (item) => <NoteRow
                                note={item.item}
                                onLongPress={() => onLongPressItem(item.item)}
                                onPress={() => onPressItem(item.item)}
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
            <CreditModal
                visible={isVisibleCreditModal}
                onRequestClose={() => {
                    setIsVisibleCreditModal(false)
                }}
            />
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
});

export default Home;
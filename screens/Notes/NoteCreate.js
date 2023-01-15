import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid'
import NoteForm from '../../components/Notes/NoteForm';
import { AppContext } from '../../contexts';

export default function NoteCreate({ navigation }) {
    const { notes, writeNotes } = useContext(AppContext)

    const onSubmit = async ({ title, description }) => {
        writeNotes([...notes, { id: uuid.v4(), title, description }])
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <NoteForm onSubmit={onSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
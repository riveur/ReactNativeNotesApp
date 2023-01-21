import { useContext, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid'
import EditorHeader from '../../components/Headers/EditorHeader';
import NoteForm from '../../components/Notes/NoteForm';
import { AppContext } from '../../contexts';
import { primaryColor, randomNoteColor } from '../../styles';

export default function NoteCreate({ navigation }) {
    const { notes, writeNotes } = useContext(AppContext)
    const formRef = useRef(null)

    const onSubmit = async ({ title, description }) => {
        writeNotes([...notes, { id: uuid.v4(), title, description, bgColor: randomNoteColor() }])
        navigation.navigate('Home')
    }

    return (
        <>
            <EditorHeader
                editState={true}
                onPressBack={() => navigation.goBack()}
                onPressSave={() => formRef?.current?.submit()}
            />
            <View style={styles.container}>
                <NoteForm ref={formRef} onSubmit={onSubmit} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 24,
        paddingBottom: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: primaryColor
    }
})
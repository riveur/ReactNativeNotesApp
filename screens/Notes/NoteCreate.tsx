import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useContext, useRef } from "react";
import { StyleSheet, View } from "react-native";
import uuid from 'react-native-uuid'
import { RootStackParamList } from "../../App";
import EditorHeader from "../../components/Headers/EditorHeader";
import NoteForm from "../../components/Notes/NoteForm";
import { AppContext } from "../../contexts";
import { primaryColor, randomNoteColor } from "../../styles";

type Props = NativeStackScreenProps<RootStackParamList, 'Notes.create'>;

const NoteCreate = ({ navigation }: Props) => {
    const { notes, writeNotes } = useContext(AppContext)
    const formRef = useRef<{ submit: () => any }>()

    const onSubmit = async ({
        title,
        description
    }: {
        title: string,
        description: string
    }) => {
        writeNotes([...notes, { id: uuid.v4() as string, title, description, bgColor: randomNoteColor() }])
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
});

export default NoteCreate;
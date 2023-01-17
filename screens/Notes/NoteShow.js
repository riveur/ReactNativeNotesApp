import { StyleSheet, Text, View } from "react-native";
import ShowHeader from "../../components/Headers/ShowHeader";
import { primaryColor } from "../../styles";

export default function NoteShow({ navigation, route }) {
    const { note } = route.params
    return (
        <>
            <ShowHeader
                onPressBack={() => navigation.goBack()}
                onPressEdit={() => navigation.navigate('Notes.edit', { note })}
            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text
                        style={{
                            ...styles.text,
                            lineHeight: 65,
                            fontSize: 48,
                            fontWeight: '400'
                        }}
                    >
                        {note.title}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text
                        style={{
                            ...styles.text,
                            textAlignVertical: 'top',
                            lineHeight: 31,
                            fontSize: 23,
                            fontWeight: '300',
                        }}
                    >
                        {note.description}
                    </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 24,
        paddingBottom: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: primaryColor
    },
    text: {
        fontFamily: 'Nunito',
        color: '#ffffff'
    },
    row: {
        width: '100%',
        marginBottom: 40
    }
});
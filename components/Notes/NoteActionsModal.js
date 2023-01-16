import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { dangerColor, infoColor, primaryColor } from "../../styles";

export default function NoteActionsModal({ visible, onRequestClose, onPressEdit, onPressDelete, data }) {
    const confirmDelete = () => {
        Alert.alert('Confirmation', 'Êtes-vous sûr de vouloir supprimer cet élément ?', [
            { text: 'Non' },
            { text: 'Oui', onPress: onPressDelete }
        ])
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onRequestClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>{data?.title}</Text>
                    <Pressable
                        style={({ pressed }) => [
                            { opacity: pressed ? 0.6 : 1 },
                            { ...styles.button, backgroundColor: infoColor }
                        ]}
                        onPress={onPressEdit}
                    >
                        <Text style={styles.buttonText}>Modifier</Text>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            { opacity: pressed ? 0.6 : 1 },
                            { ...styles.button, backgroundColor: dangerColor }
                        ]}
                        onPress={() => confirmDelete()}
                    >
                        <Text style={styles.buttonText}>Supprimer</Text>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            { opacity: pressed ? 0.6 : 1 },
                            styles.button
                        ]}
                        onPress={onRequestClose}
                    >
                        <Text style={styles.buttonText}>Fermer</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginVertical: 5,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: primaryColor,
        width: '100%'
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})
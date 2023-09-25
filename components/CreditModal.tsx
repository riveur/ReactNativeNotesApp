import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { primaryColor, creditTextColor } from "../styles";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    visible: boolean;
    onRequestClose: () => void;
};

const CreditModal: React.FC<Props> = ({ visible, onRequestClose }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onRequestClose}
        >
            <View
                style={styles.centeredView}
                onTouchEnd={() => onRequestClose()}
            >
                <View style={styles.modalView}>
                    <Text style={styles.text}>Design: Devya Kelaskar (sur Figma)</Text>
                    <Text style={{ ...styles.text, marginTop: 20 }}>
                        Fait avec <FontAwesome name="heart" /> par Riveur
                    </Text>
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
        backgroundColor: primaryColor,
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
    text: {
        color: creditTextColor
    }
});

export default CreditModal;
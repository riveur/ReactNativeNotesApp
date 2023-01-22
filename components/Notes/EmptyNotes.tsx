import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
    message: string;
};

const EmptyNotes: React.FC<Props> = ({ message }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/illustrations/rafiki.png')} style={{ marginHorizontal: 32 }} />
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    message: {
        fontFamily: 'Nunito',
        fontSize: 20,
        fontWeight: '300',
        lineHeight: 27,
        color: '#ffffff'
    }
});

export default EmptyNotes;
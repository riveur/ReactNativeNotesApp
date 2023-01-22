import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

const Button: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            {children}
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3B3B3B',
        borderRadius: 15,
        width: 50,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    }
});

export default Button;
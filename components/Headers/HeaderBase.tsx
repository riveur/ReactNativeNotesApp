import React from 'react';
import { StyleSheet, View, ViewProps } from "react-native";
import { primaryColor } from "../../styles";

const HeaderBase: React.FC<ViewProps> = ({ children, ...rest }) => {
    return (
        <View style={styles.container} {...rest}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
        paddingTop: 24,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: primaryColor
    }
});

export default HeaderBase;
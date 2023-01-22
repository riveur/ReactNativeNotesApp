import { StyleSheet, TextInput, TouchableOpacity, View, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { iconSize, secondaryColor } from "../../styles";
import { FontAwesome } from '@expo/vector-icons';

type Props = {
    onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => any;
    onChangeText: (text: string) => any;
    value?: string;
    onPressCancel: () => any;
};

const SearchField = ({ onChange, onChangeText, value, onPressCancel }: Props) => {
    return (
        <View style={styles.container}>
            <TextInput
                autoFocus
                placeholder="Rechercher un mot clé..."
                placeholderTextColor={styles.input.color}
                style={styles.input}
                onChange={onChange}
                onChangeText={onChangeText}
                value={value || ''}
            />
            <TouchableOpacity onPress={onPressCancel}>
                <FontAwesome name="times" size={iconSize} style={{ color: styles.input.color }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: secondaryColor,
        borderRadius: 30,
        paddingLeft: 38,
        paddingRight: 25,
        paddingVertical: 12,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        color: '#CCCCCC',
        fontFamily: 'Nunito',
        fontWeight: '300',
        lineHeight: 27,
        fontSize: 20
    }
});

export default SearchField;
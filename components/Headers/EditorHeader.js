import { View } from "react-native"
import Button from "../Button"
import { FontAwesome } from '@expo/vector-icons'
import { headerStyle as styles, iconSize } from "../../styles"
import HeaderBase from "./HeaderBase"

export default function EditorHeader({ onPressSave, onPressBack, editState }) {
    return (
        <HeaderBase>
            <Button onPress={onPressBack}>
                <FontAwesome name="chevron-left" size={iconSize} style={styles.headerTextColor} />
            </Button>
            <View style={styles.actionsContainer}>
                <Button onPress={onPressSave}>
                    <FontAwesome name={editState ? 'save' : 'edit'} size={iconSize} style={styles.headerTextColor} />
                </Button>
            </View>
        </HeaderBase>
    )
}
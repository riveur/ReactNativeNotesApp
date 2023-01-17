import Button from "../Button";
import HeaderBase from "./HeaderBase";
import { FontAwesome } from '@expo/vector-icons'
import { iconSize } from "../../styles";
import { headerStyle as styles } from '../../styles'
import { View } from "react-native";

export default function ShowHeader({ onPressBack, onPressEdit }) {
    return (
        <HeaderBase>
            <Button onPress={onPressBack}>
                <FontAwesome name="arrow-left" size={iconSize} style={styles.headerTextColor} />
            </Button>
            <View style={styles.actionsContainer}>
                <Button onPress={onPressEdit}>
                    <FontAwesome name="pencil" size={iconSize} style={styles.headerTextColor} />
                </Button>
            </View>
        </HeaderBase>
    )
}
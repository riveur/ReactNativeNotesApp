import { Text, View } from "react-native"
import Button from "../Button"
import { FontAwesome } from '@expo/vector-icons'
import { headerStyle as styles, iconSize } from "../../styles"
import HeaderBase from "./HeaderBase"

export default function HomeHeader({ onPressSearch, onPressInfo, title }) {
    return (
        <HeaderBase>
            <Text style={[styles.title, styles.headerTextColor]}>{title}</Text>
            <View style={styles.actionsContainer}>
                <Button onPress={onPressSearch}>
                    <FontAwesome name='search' size={iconSize} style={styles.headerTextColor} />
                </Button>
                <Button onPress={onPressInfo}>
                    <FontAwesome name='info-circle' size={iconSize} style={styles.headerTextColor} />
                </Button>
            </View>
        </HeaderBase>
    )
}
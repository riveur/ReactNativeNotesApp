import { View } from "react-native";
import Button from "../Button";
import { FontAwesome } from "@expo/vector-icons";
import { headerStyle as styles, iconSize } from "../../styles";
import HeaderBase from "./HeaderBase";
import React from "react";

type Props = {
    onPressSave?: () => any;
    onPressBack?: () => any;
    editState: boolean;
};

const EditorHeader: React.FC<Props> = ({ onPressSave, onPressBack, editState }) => {
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

export default EditorHeader;
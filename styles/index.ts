import { StyleSheet } from "react-native";

export const primaryColor = '#252525';
export const secondaryColor = '#3B3B3B';
export const darkColor = '#252525';
export const placeholderColor = '#9A9A9A';
export const dangerColor = '#FF0000';
export const infoColor = '#3993DD';
export const creditTextColor = '#CFCFCF';

const noteColors: string[] = [
    '#FD99FF',
    '#FF9E9E',
    '#91F48F',
    '#FFF599',
    '#9EFFFF',
    '#B69CFF'
];

export const randomNoteColor = (): string => {
    return noteColors[Math.floor(Math.random() * noteColors.length)]
}

export const iconSize = 20;

export const headerStyle = StyleSheet.create({
    title: {
        fontFamily: 'Nunito',
        fontWeight: '600',
        fontSize: 43,
        lineHeight: 59
    },
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    headerTextColor: {
        color: '#ffffff'
    }
});
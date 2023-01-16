export const primaryColor = '#252525'
export const secondaryColor = '#3B3B3B'
export const darkColor = '#252525'
export const placeholderColor = '#9A9A9A'
export const dangerColor = '#FF0000'
export const infoColor = '#3993DD'

const noteColors = [
    '#FD99FF',
    '#FF9E9E',
    '#91F48F',
    '#FFF599',
    '#9EFFFF',
    '#B69CFF'
]

export const randomNoteColor = () => {
    return noteColors[Math.floor(Math.random() * noteColors.length)]
}
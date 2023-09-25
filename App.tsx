import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { AppContext } from './contexts';
import { Note, useNotes } from './hooks/notes';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import NoteCreate from './screens/Notes/NoteCreate';
import { primaryColor } from './styles';
import NoteShow from './screens/Notes/NoteShow';
import NoteSearch from './screens/Notes/NoteSearch';

export type RootStackParamList = {
    'Home': undefined;
    'Notes.search': undefined;
    'Notes.show': { note: Note };
    'Notes.create': undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const { notes, setNotes, readNotes, writeNotes } = useNotes('notes')

    const [fontLoaded] = useFonts({
        'Nunito': require('./assets/fonts/Nunito/Nunito-Regular.ttf')
    })

    if (!fontLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: primaryColor }}>
                <ActivityIndicator size='large' color='#ffffff' />
            </View>
        )
    }

    return (
        <AppContext.Provider value={{ notes, setNotes, readNotes, writeNotes }}>
            <StatusBar backgroundColor={primaryColor} showHideTransition='slide' />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen
                        name='Home'
                        component={Home}
                    />
                    <Stack.Screen
                        name='Notes.search'
                        component={NoteSearch}
                    />
                    <Stack.Screen
                        name='Notes.show'
                        component={NoteShow}
                    />
                    <Stack.Screen
                        name='Notes.create'
                        component={NoteCreate}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
}
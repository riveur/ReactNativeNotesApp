import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { AppContext } from './contexts';
import { useNotes } from './hooks/notes';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import NoteCreate from './screens/Notes/NoteCreate'
import NoteEdit from './screens/Notes/NoteEdit';
import { primaryColor } from './styles';

const Stack = createNativeStackNavigator();

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
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Home'
                        component={Home}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name='Notes.create'
                        component={NoteCreate}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name='Notes.edit'
                        component={NoteEdit}
                        options={({ route }) => ({
                            headerShown: false
                        })}
                    />
                </Stack.Navigator>
                <StatusBar style='auto' />
            </NavigationContainer>
        </AppContext.Provider>
    );
}
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import NoteCreate from './screens/Notes/NoteCreate'

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ title: 'Notes' }} />
                <Stack.Screen name='Notes.create' component={NoteCreate} options={{ title: 'Create a new note' }} />
            </Stack.Navigator>
            <StatusBar style='auto' />
        </NavigationContainer>
    );
}

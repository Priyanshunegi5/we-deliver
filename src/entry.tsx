import '@expo/metro-runtime';
import { PaperProvider } from 'react-native-paper';
import { App } from 'expo-router/build/qualified-entry'
import { renderRootComponent } from 'expo-router/build/renderRootComponent';

const Main = () => {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    )
}

renderRootComponent(Main);

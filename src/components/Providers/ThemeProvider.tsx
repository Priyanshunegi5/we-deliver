import {
    PaperProvider,
} from 'react-native-paper';
import { JSX } from "react";

import { list } from '@/data/themes'
import { useColorScheme } from 'react-native';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';

function ThemeProvider(props: { children: JSX.Element }) {
    const colorScheme = useColorScheme();
    const { theme } = useMaterial3Theme();

    const paperTheme =
        colorScheme === 'dark'
            ? { ...MD3DarkTheme, colors: theme.dark }
            : { ...MD3LightTheme, colors: theme.light };

    return (
        <PaperProvider theme={paperTheme}>
            {props.children}
        </PaperProvider>
    )
}

export default ThemeProvider
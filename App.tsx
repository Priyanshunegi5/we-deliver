import {
    Text,
    View,
    AppRegistry,
} from 'react-native'

import * as React from 'react'
import { expo } from './app.json'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'

export default function App() {
    return (
        <PaperProvider>
            <View className="flex-1 items-center justify-center bg-white">
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        </PaperProvider>
    )
}

AppRegistry.registerComponent(expo.name, () => App)
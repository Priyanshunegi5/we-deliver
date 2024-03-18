import React from 'react'
import { View, Text, Appbar } from 'react-native-paper'

const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to your React Native App!</Text>
      </View>
    </View>
  )
}

export default Page

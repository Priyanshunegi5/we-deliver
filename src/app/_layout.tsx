import { Slot } from 'expo-router'
import Wrapper from '@/components/Screen/Wrapper'
import { ImageBackground, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

export default function HomeLayout() {
  const image = require('../../assets/backdrops/screen.png')

  return (
    <ImageBackground resizeMode="cover" source={image} style={styles.image}>
      <Wrapper>
        <Slot />
      </Wrapper>
    </ImageBackground>
  )
}

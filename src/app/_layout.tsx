import { Slot } from 'expo-router'
import { ImageBackground, StyleSheet } from 'react-native'
import Wrapper from '@/components/Screen/Wrapper'

const image = //{ uri: 
    require('../../assets/backdrops/screen.png')
// }

const placeholder = {
    uri:
        'https://s4.ezgif.com/tmp/ezgif-4-57c4d71d31.gif'
    // 'https://cdn.dribbble.com/users/958300/screenshots/3727440/boxgif2.gif'
}

export default function HomeLayout() {
    return (
        <ImageBackground resizeMode="cover" source={image} style={styles.image}>
            <Wrapper>
                <Slot />
            </Wrapper>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000a0',
    },
})

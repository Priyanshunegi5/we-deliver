import * as React from 'react'
import { router } from 'expo-router'
import LottieView from 'lottie-react-native'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import { Button, Avatar, Text } from 'react-native-paper'

const styles = StyleSheet.create({
  row: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 35,
  },
  button: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  shadow: {
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#202020',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    height: 50,
    marginTop: -130,
    backgroundColor: '#ffffff75',
  },
  avatar: {
    marginTop: -120,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
})

export default function Page() {
  const { t } = useTranslation()
  const logo = require('../../assets/splash/logo.png')
  const getStarted = require('../../assets/app/get-started.json')

  const onPress = () => {
    router.replace('/app/home/dashboard/panel.tsx')
  }

  return (
    <>
      <LottieView
        loop={true}
        autoPlay={true}
        style={{
          flex: 1,
          width: 460,
          height: 500,
          marginLeft: -25,
          marginTop: -100,
        }}
        source={getStarted}
      />

      <View style={styles.backdrop}></View>

      <View style={styles.container}>
        <Avatar.Image
          size={150}
          source={logo}
          style={styles.avatar}
          className="mt-20 py-10"
        />

        <Text className="font-bold pt-10" variant="displayMedium">
          {t('We Deliver')}
        </Text>
      </View>

      <View style={styles.row}>
        <Button
          className="bg-blue-400"
          mode="contained"
          onPress={onPress}
          contentStyle={{
            paddingVertical: 10,
          }}
          style={styles.button}>
          {t('Get Started')}
        </Button>
      </View>

      <View className="bg-stone-100 mt-14">
        <Text className="font-thin p-2 text-center text-xm">
          {t(
            'By continuing you agree to our Terms of Service & Privacy Policy',
          )}
        </Text>
      </View>
    </>
  )
}

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Wrapper from '@/components/Screen/Wrapper'
import { StyleSheet, View, Alert, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { Surface } from 'react-native-paper'
// import { i18next } from '@/services/localization/i18next'
import { Button, Avatar, Text } from 'react-native-paper'
import LottieView from 'lottie-react-native'
import { ImageBackground } from 'react-native'
import { useTheme } from 'react-native-paper'

const image = require('../../assets/splash/logo.png')

export default function Page() {
  const theme = useTheme()

  // const { t } = useTranslation()

  return (
    <>
      <LottieView
        loop
        autoPlay={true}
        style={{
          marginLeft: -25,
          marginTop: -170,
          flex: 1,
          width: 460,
          height: 500,
        }}
        source={require('../../assets/lottie/login_lottie.json')}
      />

      <View style={styles.backdrop}></View>
      <View style={styles.container}>
        <Avatar.Image
          size={150}
          style={styles.avatar}
          className="mt-20 py-10"
          source={image}
        />

        <Text className="font-bold pt-10" variant="displayMedium">
          We Deliver
        </Text>
      </View>

      <View style={styles.row}>
        <Button
          className="bg-blue-400"
          mode="contained"
          contentStyle={{
            // <--- HERE-----
            paddingVertical: 10,
          }}
          onPress={() => {
            // Alert.alert('warning', 'Under Construction!')
          }}
          style={styles.width100PercentButton}>
          Get Started
        </Button>
      </View>

      <View className="bg-stone-100 mt-14">
        <Text className="font-thin p-2 text-center text-xm">
          By continuing you agree to our Terms of service & Privacy Policy
        </Text>
      </View>

      {/* <View style={styles.container}> */}
      {/* 

        <Text className="font-bold my-10" variant="displayMedium">
          We Deliver
        </Text>

        <View style={styles.row}>
          <Button
            className='bg-blue-400'
            mode="contained"
            onPress={() => {
              // Alert.alert('warning', 'Under Construction!')
              setShow(true);
            }}
            style={styles.width100PercentButton}>
            Get Started
          </Button>
        </View> */}
      {/* 
        <Text className="font-bold my-10" variant="displayMedium">
          This will change: {t('Hello World!')}
        </Text>

        <View style={styles.row}>
          <Button
            mode="contained"
            onPress={() => {
              i18next.changeLanguage('en')
            }}
            style={styles.width100PercentButton}>
            English
          </Button>
        </View>
        <View style={styles.row}>
          <Button
            mode="contained"
            onPress={() => {
              i18next.changeLanguage('hi')
            }}
            style={styles.width100PercentButton}>
            Hindi
          </Button>
        </View> */}

      {/* <Text className="font-bold my-3">
          Everyday needs delivered every morning!
        </Text> */}
      {/* </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#202020',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
  },
  backdrop: {
    height: 50,
    marginTop: -50,
    backgroundColor: '#ffffff75',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 35,
    alignItems: 'center',
  },
  width100PercentButton: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  avatar: {
    marginTop: -120,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

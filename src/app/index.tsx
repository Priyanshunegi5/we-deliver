import { useRef, useEffect } from 'react'

import { router } from 'expo-router'
import { Text } from 'react-native-paper'
import LottieView from 'lottie-react-native'
import { useTranslation } from 'react-i18next'
import { i18next } from '@/services/localization/i18next'
import { Dimensions, StyleSheet, View } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  lottieContainer: {
    pointerEvents: 'none',
  },
  container: {
    flex: 1,
    marginTop: 120,
    marginBottom: -200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieAnimation: {
    flexGrow: 1,
    width: width,
    aspectRatio: width / height,
  },
})

export default function Page() {
  const { t } = useTranslation()
  const animationRef = useRef<LottieView>(null)
  const welcome = require('../../assets/app/welcome.json')

  const onAnimationFinish = () => {
    animationRef.current?.reset()
    return router.replace('/get-started')
  }

  useEffect(() => {
    animationRef.current?.play()
    animationRef.current?.play(10, 110)
  }, [])

  return (
    <View style={styles.lottieContainer}>
      <View style={styles.container}>
        <Text className="font-bold pt-10" variant="displayMedium">
          {i18next.t('We Deliver')}
        </Text>
      </View>

      <LottieView
        loop={false}
        autoPlay={true}
        source={welcome}
        ref={animationRef}
        resizeMode="cover"
        style={styles.lottieAnimation}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  )
}

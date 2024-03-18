import { Avatar, Button, TextInput } from 'react-native-paper'

import { router } from 'expo-router'
import { MultiFactor } from '@/enums'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  suggest: {
    marginTop: -50,
    color: '#008000',
  },
  button: {
    width: 200,
    height: 50,
    color: '#008000',
    fontSize: 50,
  },
  input: {
    height: 60,
    width: 300,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginBottom: 15,
  },
  alternativeOption: {
    marginVertical: 15,
  },
  alternativeLogin: {
    gap: 10,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 140,
    alignItems: 'center',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  suggestContainer: {
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    marginTop: -130,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  alternativeAuthIcon: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
})

export default function Page() {
  const { t } = useTranslation()

  const [phone, setPhone] = useState('8630032128')

  /**
   * Handle phone sign up logic.
   *
   * @return void
   */
  const handlePhoneSignUp = () => {
    // Handle phone sign up logic here
  }

  /**
   * Redirect to mail sign in.
   *
   * @return void
   */
  const redirectToMailSignIn = () => {
    router.replace('/auth/mail/sign-in')
  }

  /**
   * Redirect to socialite google signin.
   *
   * @return void
   */
  const redirectToSocialiteGoogleSignIn = () => {
    router.replace({
      pathname: '/auth/socialite',
      params: { socialite: 'google' },
    })
  }

  /**
   * Redirect to multifactor authentication page.
   *
   * @param {MultiFactor} type
   * @return void
   */
  const redirectToMultiFactorAuth = (type: MultiFactor) => {
    switch (type) {
      case MultiFactor.Mail:
        redirectToMailSignIn()
        break
      case MultiFactor.Google:
        redirectToSocialiteGoogleSignIn()
        break
    }
  }

  return (
    <View style={styles.screen}>
      <Text className="heading" style={styles.title}>
        {t('Hello')}
      </Text>

      <Text className="subtitles" style={styles.subTitle}>
        {t('Sign Up to continue.')}
      </Text>

      <View style={styles.container}>
        <Avatar.Image
          size={120}
          style={styles.avatar}
          className="mt-20 py-10"
          source={require('assets/app/auth/user.png')}
        />

        <View style={{ marginTop: 30, marginBottom: 10 }}>
          <TextInput
            value={phone}
            mode="outlined"
            label={t('Phone')}
            style={styles.input}
            autoCapitalize="none"
            onChangeText={setPhone}
            right={<TextInput.Icon icon="phone" />}
          />
        </View>

        <Text className="text-center text-lg" style={styles.alternativeOption}>
          {t('A')}
          <Text className="font-bold text-center text-lg">{t(' OTP ')}</Text>
          {t('will be send via')}

          <Text className="font-bold text-center text-lg">{t(' SMS ')}</Text>
          {t('to')}
          <Text className="font-bold text-center text-lg">
            {t(' verify your identity')}
          </Text>
        </Text>

        <Button
          mode="contained"
          style={styles.button}
          onPress={handlePhoneSignUp}
          className="bg-blue-400">
          {t('Continue')}
        </Button>

        <Text className="text-lg" style={styles.alternativeOption}>
          {t('or with')}
        </Text>

        <View style={styles.alternativeLogin}>
          <Button
            contentStyle={{
              paddingVertical: 25,
            }}
            onPress={() => {
              redirectToMultiFactorAuth(MultiFactor.Phone)
            }}>
            <Avatar.Image
              size={50}
              style={styles.alternativeAuthIcon}
              source={require('assets/app/auth/google.png')}
            />
          </Button>

          <Button
            contentStyle={{
              paddingVertical: 25,
            }}
            onPress={() => {
              redirectToMultiFactorAuth(MultiFactor.Mail)
            }}>
            <Avatar.Image
              size={50}
              style={styles.alternativeAuthIcon}
              source={require('assets/app/auth/mail.png')}
            />
          </Button>
        </View>
      </View>
    </View>
  )
}

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
    fontSize: 30,
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

  const [email, setEmail] = useState('Email')
  const [password, setPassword] = useState('Password')
  const [showPassword, setShowPassword] = useState(false)

  /**
   * Handle mail sign in logic.
   *
   * @return void
   */
  const handleMailSignIn = () => {
    // Handle mail sign in logic here
  }

  /**
   * Redirect to mail sign up.
   *
   * @return void
   */
  const redirectToMailSignUp = () => {
    router.replace('/auth/mail/sign-up')
  }

  /**
   * Redirect to phone sign in.
   *
   * @return void
   */
  const redirectToPhoneSignIn = () => {
    router.replace('/auth/phone/sign-in')
  }

  /**
   * Redirect to mail forgot password.
   *
   * @return void
   */
  const redirectToMailForgotPassword = () => {
    router.replace('/auth/mail/forgot-password')
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
      case MultiFactor.Phone:
        redirectToPhoneSignIn()
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
        {t('Sign In to continue.')}
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
            value={email}
            mode="outlined"
            secureTextEntry
            label={t('Email')}
            style={styles.input}
            autoCapitalize="none"
            onChangeText={setEmail}
            keyboardType="email-address"
            right={<TextInput.Icon icon="email" />}
          />

          <TextInput
            mode="outlined"
            value={password}
            label={t('Password')}
            style={styles.input}
            autoCapitalize="none"
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye' : 'eye-off'}
                onPress={() => {
                  setShowPassword(!showPassword)
                }}
              />
            }
          />

          <Text className="font-bold" style={styles.forgotPassword}>
            <Button onPress={() => redirectToMailForgotPassword()}>
              {t('Forgot password?')}
            </Button>
          </Text>
        </View>

        <Button
          mode="contained"
          style={styles.button}
          onPress={handleMailSignIn}
          className="bg-blue-400">
          {t('Sign In')}
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
              redirectToMultiFactorAuth(MultiFactor.Phone)
            }}>
            <Avatar.Image
              size={50}
              style={styles.alternativeAuthIcon}
              source={require('assets/app/auth/phone.png')}
            />
          </Button>
        </View>

        <View style={styles.suggestContainer}>
          <Text style={styles.suggest}>{t("Don't have account?")}</Text>

          <Text style={styles.suggest}>
            <Button onPress={() => redirectToMailSignUp()}>
              {t('Sign Up')}
            </Button>
          </Text>
        </View>
      </View>
    </View>
  )
}

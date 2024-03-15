// import { useTranslation } from 'react-i18next'

// export default function Page() {
//   const { t } = useTranslation()

//   return <>{t('Sign Up')}</>
// }

// code section starts here...!
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button, HelperText, IconButton } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

/////////////////////////////////////////////////////////////
const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    // Implement your signup logic here
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <View style={styles.container}>
      <Text className="heading" style={styles.title}>
        Hello
      </Text>
      <Text className="subtitles" style={styles.subTitle}>
        Sign up to continue.
      </Text>

      {/* user profile starts here ...! */}

      <Avatar.Image
        size={150}
        style={styles.avatar}
        className="mt-20 py-10"
        source={pimg}
      />

      {/* user profile ends here ...! */}

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        label="EMAIL"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        label="PASSWORD"
        secureTextEntry={true}
        right={<TextInput.Right icon="eye-outline" />}
      />
      <Button mode="contained" style={styles.button} onPress={handleSignUp}>
        Sign Up
      </Button>
      <HelperText type="error" visible={false}>
        Email or password is invalid
      </HelperText>
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <View style={styles.socialLogin}>
        <Text>or with</Text>
        <IconButton
          icon="google"
          color="#DB4437"
          onPress={() => console.log('Sign up with Google')}
        />
      </View>
      <Text style={styles.signInText}>Already have account? Sign In Here</Text>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  title: {
    marginTop: 150,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    color: '#008000',
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: 15,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  signInText: {
    color: '#008000',
  },
})

// code section ends  here...!

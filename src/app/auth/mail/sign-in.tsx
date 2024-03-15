import { useTranslation } from 'react-i18next'

export default function Page() {
  const { t } = useTranslation()

  return <>{t('Sign In')}</>
}
// code section strats here ....!

// import React, { useState } from 'react'
// import { View, Text } from 'react-native'
// import { TextInput, Button, HelperText, IconButton } from 'react-native-paper'
// import { MaterialCommunityIcons } from '@expo/vector-icons'

// const SignUp = () => {
//   const [phoneNumber, setPhoneNumber] = useState('')

//   const handleSignUp = () => {
//     // Implement your signup logic here
//     console.log('Phone Number:', phoneNumber)
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hello</Text>
//       <Text style={styles.subTitle}>Sign in to continue.</Text>
//       <TextInput
//         style={styles.input}
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         label="PHONE NUMBER"
//         keyboardType="phone-pad"
//       />
//       <Text style={styles.otpText}>
//         A OTP will be sent via SMS to verify your identity.
//       </Text>
//       <Button mode="contained" style={styles.button} onPress={handleSignUp}>
//         Continue
//       </Button>
//       <Text style={styles.forgotPassword}>Forgot password?</Text>
//       <View style={styles.socialLogin}>
//         <Text>or with</Text>
//         <IconButton
//           icon="google"
//           color="#DB4437"
//           onPress={() => console.log('Sign up with Google')}
//         />
//       </View>
//       <Text style={styles.signInText}>Don't have account? Sign Up Here</Text>
//     </View>
//   )
// }

// export default SignUp

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 30,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   subTitle: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   input: {
//     marginBottom: 10,
//   },
//   button: {
//     marginBottom: 10,
//   },
//   otpText: {
//     fontSize: 12,
//     color: '#A1A1A1',
//     marginBottom: 15,
//   },
//   forgotPassword: {
//     textAlign: 'right',
//     marginBottom: 15,
//   },
//   socialLogin: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   signInText: {
//     color: '#007bff',
//   },
// })

// //code section ends here ...!

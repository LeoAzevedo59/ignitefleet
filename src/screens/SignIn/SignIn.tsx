import React, { useState } from 'react'

import backgroundImage from '../../assets/background.png';

import {GoogleSignin} from '@react-native-google-signin/google-signin'

import { Text, ImageBackground, Alert } from 'react-native'
import { theme } from '../../theme'
import { Button } from '../../components';
import { IOS_CLIENT_ID, WEB_CLIENT_ID } from '@env';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID
})

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)


  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true)

      const {idToken} = await GoogleSignin.signIn()


      if(idToken)
      {
        //
      }else {
        Alert.alert('Alerta!', 'Não foi possível conectar-se sua conta google.')
        setIsAuthenticating(false)
      }

    } catch (error) {
      console.error(error)
      Alert.alert('Alerta!', 'Não foi possível conectar-se sua conta google.')
      setIsAuthenticating(false)
    } 

  }

  return (
    <ImageBackground source={backgroundImage} style={{flex:1,
        justifyContent: 'center',
        backgroundColor: theme.COLORS.GRAY_800,
        padding: 52}}>

      <Text style={{color: theme.COLORS.BRAND_LIGHT,
         fontSize: theme.FONT_SIZE.XXXL,
         fontFamily: theme.FONT_FAMILY.BOLD,
         textAlign: 'center'}}>Ignite Fleet</Text>

      <Text style={{color: theme.COLORS.GRAY_100,
         fontSize: theme.FONT_SIZE.MD,
         fontFamily: theme.FONT_FAMILY.REGULAR,
         textAlign: 'center'}}>Gestão de uso de veículos</Text>

      <Button 
      onPress={handleGoogleSignIn}
      title='Entrar com Google' 
      isLoading={isAuthenticating}/>
    </ImageBackground>
  )
}
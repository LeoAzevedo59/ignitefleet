import React from 'react'

import backgroundImage from '../../assets/background.png';

import { View, Text, ImageBackground } from 'react-native'
import { theme } from '../../theme'
import { Button } from '../../components';

export function SignIn() {
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

      <Button title='Entrar com Google'/>
    </ImageBackground>
  )
}
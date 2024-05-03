import { View, Text } from 'react-native'
import React from 'react'
import { theme } from '../../theme'

export function SignIn() {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.COLORS.GRAY_800}}>
      <Text style={{color: theme.COLORS.WHITE}}>SignIn</Text>
    </View>
  )
}
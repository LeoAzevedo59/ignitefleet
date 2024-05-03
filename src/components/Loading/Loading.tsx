import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import { theme } from '../../theme'

export function Loading() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator color={theme.COLORS.WHITE}/>
    </View>
  )
}
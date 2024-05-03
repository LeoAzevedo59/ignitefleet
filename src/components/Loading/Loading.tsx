import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import { theme } from '../../theme'

export function Loading() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.COLORS.GRAY_800}}>
    <ActivityIndicator color={theme.COLORS.BRAND_LIGHT}/>
    </View>
  )
}
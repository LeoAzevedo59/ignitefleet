import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { theme } from '../../theme'
import { Loading } from '../Loading/Loading'

type Props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

export function Button({title, isLoading = false, ...rest}:Props) {
  return (
    <TouchableOpacity 
    disabled={isLoading}
    activeOpacity={0.7}
    style={{flex:1, minHeight: 56, maxHeight: 56, borderRadius: 6, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.COLORS.BRAND_MID, marginTop: 32}}>
      <Text style={{color: theme.COLORS.WHITE,
         fontSize: theme.FONT_SIZE.MD,
         fontFamily: theme.FONT_FAMILY.BOLD,}}
    {...rest}>
    {
        isLoading ? <Loading/> : title
    }
    </Text>
    </TouchableOpacity>
  )
}
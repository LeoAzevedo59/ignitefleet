import { StatusBar as StatusBarRN} from 'react-native';

import React from 'react'

export function StatusBar() {
  return (
    <>
    <StatusBarRN
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
    </>
  )
}
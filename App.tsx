


import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading, StatusBar } from './src/components';
import { Home, SignIn } from './src/screens';

import {AppProvider, UserProvider} from '@realm/react'

import {ANDROID_CLINT_ID, REALM_APP_ID} from '@env'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  if(!fontsLoaded)
    {
      return(
        <>
        <StatusBar/>
        <Loading/>
        </>
      )
    }

  return (
    <AppProvider id={REALM_APP_ID}>
      <StatusBar/>

      <UserProvider fallback={SignIn}> 
        <Home/>
      </UserProvider>
    </AppProvider>
  );
}


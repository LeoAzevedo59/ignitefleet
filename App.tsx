


import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading, StatusBar } from './src/components';
import { SignIn } from './src/screens';

import {ANDROID_CLINT_ID} from '@env'

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
    <>
      <StatusBar/>
      <SignIn/>
    </>
  );
}


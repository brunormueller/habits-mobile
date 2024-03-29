import './src/lib/dayjs'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Home } from './src/screeens/Home';
import { Routes } from './src/routes';
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold
  })

  if (!fontsLoaded) {
    return (

      <Loading />
    )

  }
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>

  )
}


import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';

import { Routes } from './src/routes';

import { Loading } from 'src/components/Loading';
import { theme } from '@theme/theme';

import { Statistics } from '@screens/Statistics';

export default function App() {

  const [ fontsLoaded ] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.GRAY_7 }}>
      <StatusBar
        style="dark"
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes/> : <Loading/> }     
    </View>
  );
}



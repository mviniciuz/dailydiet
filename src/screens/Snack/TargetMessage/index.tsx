import { Text, Image, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';

import { Button } from '@components/Button';

import ImageOn from '@assets/on.png';
import ImageOff from '@assets/off.png';

type RouteParams = {
  title: string;
  subTitle: string;
  target: boolean;
}

export function TargetMessage(){
  const navigation = useNavigation();
  const route = useRoute();

  const { title, subTitle, target} = route.params as RouteParams;

  return(
    <SafeAreaProvider style={styles.container}>
      <Text style={target ? styles.titleOn : styles.titleOff}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      {target ? 
        <Image style={styles.image} source={ImageOn}/>
      :
        <Image style={styles.image} source={ImageOff}/>         
      }
      
      <Button 
        title='Ir para a página inicial!'
        onSubmit={() => navigation.navigate('home')}                
      />
    </SafeAreaProvider>
  )
}
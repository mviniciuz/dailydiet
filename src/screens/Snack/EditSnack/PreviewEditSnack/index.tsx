
import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Navigator } from '@components/Navigator'

import { styles } from './styles';

type routeParams = {
  target: boolean
}

export function PreviewEditSnack(){
  const navigation = useNavigation();
  const route = useRoute();
  const {target} = route.params as routeParams;

  function handleBack(){
    navigation.goBack();
  }

  return(
    <SafeAreaView style={target ? styles.containerOn : styles.containerOff}>
      <View style={target? styles.formHeaderOnTarget : styles.formHeaderOffTarget}>
        <Navigator
          title='Snack'
          target={target}
          onSubmit={handleBack}        
        />

      </View>
      <View style={styles.formContent}>
        <Text style={styles.title}>
          {'Sanduíche'}
        </Text>
        <Text style={styles.subTitle}>
          {'Sanduíche de pão integral com atul e salada de alfaçe e tomates'}
        </Text>        
        <Text style={styles.dataTime}>
          {'Data e hora'}
        </Text>        

      </View>      
    </SafeAreaView>
  )
}
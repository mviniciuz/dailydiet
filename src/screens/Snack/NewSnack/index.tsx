import { SafeAreaView } from 'react-native-safe-area-context';

import { SnackForm } from '@components/SnackForm';

import { styles } from './styles';

export function NewSnack(){
  return(
    <SafeAreaView style={styles.container}>
      <SnackForm
        type='new'
        dataProp={new Date()}
        timeProp={new Date()}
      />
    </SafeAreaView>
  )
}
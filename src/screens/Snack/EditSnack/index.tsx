import { useState } from 'react';
import { View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';

import { Navigator } from '@components/Navigator';
import { SnackForm } from '@components/SnackForm';

export function EditSnack(){

  const route = useRoute();
  const {title, snack} = route.params;

  const [name, setName] = useState(snack.name);
  const [description, setDescription] = useState(snack.text);
  const [data, setData] = useState(title);
  const [time, setTime] = useState(snack.time);
  const [target, setTarget] = useState(snack.target);

  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();
  }

  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.formHeader}>
        <Navigator
          title='Edit snack'
          onSubmit={handleBack}        
        />
      </View>      
      <View style={styles.formContent}>

        <SnackForm 
          nameProp={name}
          descriptionProp={description}
          dataProp={data}
          timeProp={time}
          targetProp={target}
          type='edit'
        />
      </View>
  </SafeAreaView>
  )
}
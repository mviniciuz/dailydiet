import { useState } from 'react';
import { View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { Navigator } from '@components/Navigator';
import { SnackForm } from '@components/SnackForm';


export function EditSnack(){
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');
  const [target, setTarget] = useState(true);

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
          name={name}
          setName={() => setName}
          description={description}
          setDescription={()=> setDescription}
          data={data}
          setData={()=> setData}
          time={time}
          setTime={() => setTime}
          type='edit'
        />
      </View>
  </SafeAreaView>
  )
}
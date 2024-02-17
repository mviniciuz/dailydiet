import { useState } from 'react';
import {View, TextInput, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { SelectTarget } from '@components/SelectTarget';

export function NewSnack(){
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'Name'}</Text>
      <TextInput
        style={styles.inputName}
        value={name}
        onChangeText={setName}        
      />
      <Text style={styles.title}>{'Description'}</Text>
      <TextInput
        style={styles.inputDescription}
        value={description}
        onChangeText={setDescription}     
      />
      <View style={styles.dataTime}>
        <View style={styles.data}>
          <Text style={styles.title}>{'Data'}</Text>
          <TextInput
            style={styles.inputDataTime}
            value={data}
            onChangeText={setData}            
          />
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>{'Time'}</Text>
          <TextInput
            style={styles.inputDataTime}
            value={time}
            onChangeText={setTime}            
          />
        </View> 
      </View>
      <Text style={styles.title}>{'Is in the Diet'}</Text>
      <SelectTarget/>  
    </SafeAreaView>
  )
}
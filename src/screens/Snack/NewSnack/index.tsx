import { useState } from 'react';
import {View, TextInput, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { SelectTarget } from '@components/SelectTarget';
import { Button  } from '@components/Button';

export function NewSnack(){
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');
  const [target, setTarget] = useState(true);

  const navigation = useNavigation();

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
      <SelectTarget target={target} setTarget={setTarget}/>

      {target ? 
        <Button
          title="Add snack"
          onSubmit={() => navigation.navigate('TargetMessage', {
            title: 'Continue assim!',
            subTitle: 'Você continua dentro da dieta. Muito Bem',
            target: target
          })}
        /> 
        :
        <Button
        title="Add snack"
        onSubmit={() => navigation.navigate('TargetMessage', {
          title: 'Que pena!',
          subTitle: 'Você saiu da dienta dessa vez, mas continue se esforçando e não desista',
          target: target
        })}
      />    
    } 

    </SafeAreaView>
  )
}
import { View, Text, TextInput, Alert } from "react-native"

import { useNavigation} from '@react-navigation/native';

import { styles } from './styles';

import { SelectTarget } from "@components/SelectTarget";
import { Button } from "@components/Button";
import { useState } from "react";

import { snackAddNew } from "@storage/snack/snackAddNew";
import { snackEdit } from "@storage/snack/snackEdit";

type Props = {
  type: 'new' | 'edit',
  nameProp?: string,
  descriptionProp?: string,
  dataProp?: string,
  timeProp?: string,
  targetProp?: boolean,
}

export function SnackForm({ type, nameProp, descriptionProp, dataProp, timeProp, targetProp }: Props){

  const [name, setName] = useState(nameProp || '');
  const [description, setDescription] = useState(descriptionProp || '');
  const [data, setData] = useState(dataProp || '');
  const [time, setTime] = useState(timeProp || '');
  const [target, setTarget] = useState(targetProp || false);  
  const navigation = useNavigation();

  function handleSubmit(){

    if (name.length === 0) {
      return Alert.alert('Field name invalid');

    } 
    if (data.length === 0){
      return Alert.alert('Field date invalid')
    }
    if (time.length === 0){
      return Alert.alert('Field time invalid')
    }  

    const item = {
      name: name,
      text: description,
      date: data,
      time: time,
      target: target
    }

    if (type === 'new') {
      snackAddNew(item);
    }

    if (type === 'edit') {
      snackEdit(item);
    }
    
    navigation.navigate('TargetMessage', {
      title: target ? 'Very good!': 'What shame!',
      subTitle: target ? 
      'You continue on the diet, Very good!' : 
      'You got out of trouble this time, but keep trying and dont give up!',
      target: target
    });
  }

  return(
    <View style={styles.container}>

    <View style={styles.formContent}>
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
      </View>
      <View style={styles.buttonContainer}>
      <Button
        title={type === 'new' ? 'Add Snack' : 'Save changes'}
        onSubmit={handleSubmit}
      /> 
      </View>
    </View>
  )
}
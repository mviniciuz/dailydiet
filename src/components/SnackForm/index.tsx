import { View, Text, TextInput } from "react-native"


import { useNavigation} from '@react-navigation/native';

import { styles } from './styles';

import { SelectTarget } from "@components/SelectTarget";
import { Button } from "@components/Button";
import { useState } from "react";

type Props = {
  name: string;
  setName: () => {};
  description: string;
  setDescription: ()=> {};
  data: string;
  setData: ()=> {};
  time: string;
  setTime: () => {};
  type: 'new' | 'edit',

}

export function SnackForm({
    name,
    setName,
    description,
    setDescription,
    data,
    setData,
    time,
    setTime,
    type,

  }: Props){

  const [target, setTarget] = useState(false);  
  const navigation = useNavigation();

  function handleSubmit(){
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
import { View, Text, TextInput, Alert, ScrollView, TouchableHighlight, TouchableOpacity } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation} from '@react-navigation/native';

import { format } from "date-fns";

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
  dataProp?: Date,
  timeProp?: Date,
  targetProp?: boolean,
}

export function SnackForm({ type, nameProp, descriptionProp, dataProp, timeProp, targetProp }: Props){

  const [name, setName] = useState(nameProp || '');
  const [description, setDescription] = useState(descriptionProp || '');
  const [time, setTime] = useState(new Date(timeProp) || new Date());
  const [target, setTarget] = useState(targetProp || false);  
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date(dataProp) || new Date());
  const [openDate, setOpenDate] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  function handleSubmit(){

    if (name.length === 0) {
      return Alert.alert('Field name invalid');

    } 
    if (!date){
      return Alert.alert('Field date invalid')
    }
    if (time.length === 0){
      return Alert.alert('Field time invalid')
    }  

    const item = {
      name: name,
      text: description,
      date: date,
      time: time,
      target: target
    }

    try {

      if (type === 'new') {
        snackAddNew(item);
      }
  
      if (type === 'edit') {
        snackEdit(item);
      }
      
    } catch (error) {
      return
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
      <ScrollView
        keyboardDismissMode='on-drag'
      >
        <View style={styles.formContent}>
          <Text style={styles.title}>{'Name snack'}</Text>
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
              <Text style={styles.title}>{'Date'}</Text>
              <TouchableOpacity onPress={() => setOpenDate(prevState => !prevState)}>
                <TextInput
                  style={styles.inputDataTime}
                  value={`${format(date, 'dd-MM-yyyy')}`}         
                  editable={false}         
                />

                {(openDate && type === 'new')   &&
                  <DateTimePicker
                    value={date}
                    onChange={(event, selectedDate) => {
                      setOpenDate(false);
                      setDate(selectedDate);
                    }}
                    mode="date"
                    display="spinner"
                  />
                }     
              </TouchableOpacity>
            </View>
            <View style={styles.time}>
              <Text style={styles.title}>{'Time'}</Text>
              <TouchableOpacity onPress={() => setOpenTime(prevState => !prevState)}>
                <TextInput
                  style={styles.inputDataTime}
                  value={`${format(time, 'hh:mm')}`}
                  editable={false}           
                />

               {openTime &&
                  <DateTimePicker
                    value={time}
                    onChange={(event, selectedDate) => {
                      setOpenTime(false);
                      setTime(selectedDate);
                    
                    }}
                    mode="time"
                    display="spinner"

                  />
                }                

              </TouchableOpacity>               
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
      </ScrollView>
    </View>
  )
}
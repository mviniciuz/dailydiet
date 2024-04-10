
import {Text, View, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons} from '@expo/vector-icons';

import { Navigator } from '@components/Navigator'
import { Button } from '@components/Button';

import { snackDelete } from '@storage/snack/snackDelete';

import { format } from 'date-fns';

import { styles, colors } from './styles';

type routeParams = {
  snack: undefined
}

export function PreviewEditSnack(){
  const navigation = useNavigation();
  const route = useRoute();
  const {snack, title} = route.params as routeParams;

  function handleEditSnack(title: string, snack: undefined){

    navigation.navigate('EditSnack', {title, snack});
  }

  function onDelete(date: Date, time: Date){
    snackDelete(date, time);
    navigation.navigate('home');
  }

  function handleDeleteSnack(date: string, time: string){

    Alert.alert('Delete snack', 'Do you want to delete the snack?',[
      {
        text: 'yes', 
        onPress: ()=> onDelete(date, time),
        
      },
      {
        text: 'No',
        onPress: () => {}
      }
    ])
  }

  function handleBack(){
    navigation.goBack();
  }

  return(
    <SafeAreaView style={snack.target ? styles.containerOn : styles.containerOff}>
      <View style={snack.target ? styles.formHeaderOnTarget : styles.formHeaderOffTarget}>
        <Navigator
          title='Snack'
          target={snack.target }
          onSubmit={handleBack}        
        />
      </View>
      <View style={styles.formContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            {snack.name}
          </Text>
          <Text style={styles.subTitle}>
            {snack.text}
          </Text>        
          <Text style={styles.dataTime}>
            {`${format(title, 'dd-MM-yyyy')} - ${format(snack.time, 'hh:mm')}`}
          </Text>
          <View style={styles.target}>
            <MaterialIcons name='circle' size={15} color={snack.target  ? colors.GREEN_MID : colors.RED_MID}/>
            <Text style={styles.targetTitle}>{snack.target  ? 'In the Diet': 'Out the Diet'}</Text>
          </View>
        </View>
        
  
        <View style={styles.buttonContainer}>
          <Button
            iconType='edit'
            title='Edit Snack'
            onSubmit={() => handleEditSnack(title, snack)}        
          />
          <Button
            iconType='delete'
            title='Delete Snack'
            onSubmit={() =>handleDeleteSnack(title, snack.time)}        
          /> 

        </View>
      </View>      
    </SafeAreaView>
  )
}
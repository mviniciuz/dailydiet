
import {Text, View, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons} from '@expo/vector-icons';

import { Navigator } from '@components/Navigator'
import { Button } from '@components/Button';

import { styles, colors } from './styles';

type routeParams = {
  target: boolean
}

export function PreviewEditSnack(){
  const navigation = useNavigation();
  const route = useRoute();
  const {target} = route.params as routeParams;

  function handleEditSnack(){
    navigation.navigate('EditSnack');
  }

  function handleDeleteSnack(){
    function onDelete(){

    }

    Alert.alert('Delete snack', 'Do you want to delete the snack?',[
      {
        text: 'yes', 
        onPress: ()=> onDelete(),
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
    <SafeAreaView style={target ? styles.containerOn : styles.containerOff}>
      <View style={target? styles.formHeaderOnTarget : styles.formHeaderOffTarget}>
        <Navigator
          title='Snack'
          target={target}
          onSubmit={handleBack}        
        />
      </View>
      <View style={styles.formContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            {'Sanduíche'}
          </Text>
          <Text style={styles.subTitle}>
            {'Sanduíche de pão integral com atul e salada de alfaçe e tomates'}
          </Text>        
          <Text style={styles.dataTime}>
            {'Date and Time'}
          </Text>
          <View style={styles.target}>
            <MaterialIcons name='circle' size={15} color={target ? colors.GREEN_MID : colors.RED_MID}/>
            <Text style={styles.targetTitle}>{target ? 'In the Diet': 'Out the Diet'}</Text>
          </View>
        </View>
        
  
        <View style={styles.buttonContainer}>
          <Button
            iconType='edit'
            title='Edit Snack'
            onSubmit={handleEditSnack}        
          />
          <Button
            iconType='delete'
            title='Delete Snack'
            onSubmit={handleDeleteSnack}        
          /> 

        </View>
      </View>      
    </SafeAreaView>
  )
}
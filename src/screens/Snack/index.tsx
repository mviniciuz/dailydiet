import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Navigator } from '@components/Navigator';
import { NewSnack } from '@screens/Snack/NewSnack';

import { styles } from './styles';

export function Snack(){
  const navigation = useNavigation();  

  function handleBack(){
    navigation.goBack(); 
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.formHeader}>
        <Navigator 
          title="New Snack"
          onSubmit={handleBack}          
        />
      </View>
      <View style={styles.formContent}>
        <NewSnack/>


      </View>      
    </SafeAreaView>
  )
}
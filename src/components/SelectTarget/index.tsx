import {useEffect, useState} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';

import {styles, colors} from './styles';

export function SelectTarget(){
  const [target, setTarget] = useState(true);
  
  return(
    <View style={styles.container}>
      <TouchableOpacity 
        style={target ? styles.buttonOnTarget: styles.buttonDefault}
        onPress={() => setTarget(true)}       
       
      >
        <MaterialIcons name='noise-control-off' color={colors.GREEN_DARK} size={25} />
        <Text>Yes</Text>

      </TouchableOpacity>
      <TouchableOpacity 
        style={!target ? styles.buttonOffTarget : styles.buttonDefault}
        onPress={() => setTarget(false)}
      >

      <MaterialIcons name='noise-control-off' color={colors.RED_DARK}  size={25} />
        <Text>No</Text>
      </TouchableOpacity>     
    </View>
  );
}
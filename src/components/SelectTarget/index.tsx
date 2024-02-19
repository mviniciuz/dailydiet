import {useEffect, useState} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';

import {styles, colors} from './styles';

type Props = {
  target: boolean;
  setTarget: (target: boolean)=>void
}

export function SelectTarget({target, setTarget}: Props){ 
  
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
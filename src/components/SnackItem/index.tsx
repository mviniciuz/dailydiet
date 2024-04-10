import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {format} from 'date-fns';

import { styles, colors } from './styles';

type Props = TouchableOpacityProps & {
  time: Date;
  snack: string;
  target: boolean
}

export function SnackItem({time, snack, target = true, ...rest}: Props){
  return(
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Text style={styles.textTime}>{`${format(time, 'hh:mm')}`}</Text>
      <Text style={styles.textSnack}>{snack}</Text>
      <MaterialIcons 
        name="circle"
        color={target ? colors.GREEN_MID : colors.RED_MID }
        size={16}
      />

    </TouchableOpacity>
  )
}
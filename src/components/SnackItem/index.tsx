import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { styles, colors } from './styles';

type Props = TouchableOpacityProps & {
  time: string;
  snack: string;
  target: boolean
}

export function SnackItem({time, snack, target = true, ...rest}: Props){
  return(
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Text style={styles.textTime}>{time}</Text>
      <Text style={styles.textSnack}>{snack}</Text>
      <MaterialIcons 
        name="circle"
        color={target ? colors.GREEN_MID : colors.RED_MID }
        size={14}
      />

    </TouchableOpacity>
  )
}
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  iconName: string;
  color: string;
  size: number;    
}

export function ButtonIcon({iconName, size, color, ...rest}: Props){
  return(
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <MaterialIcons
        name={iconName}
        color={color}
        size={size}         
      />
    </TouchableOpacity>
  )
}
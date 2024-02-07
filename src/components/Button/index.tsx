import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

 import { MaterialIcons } from '@expo/vector-icons';

import { styles, colors } from './styles';
import { theme } from "@theme/theme";

type Props = TouchableOpacityProps & {
  title: string;
  onSubmit: ()=> void;
  iconType?: 'new' | 'edit' | 'delete' | 'none'; 
}

export function Button({title, onSubmit, iconType = 'none', ...rest}: Props){
  return(
    <TouchableOpacity 
      style={styles.container}
      {...rest}
      onPress={onSubmit}
    >

      {iconType !== 'none'  &&
        <MaterialIcons
        name={ 
          iconType === 'new' ? 'add' :
          iconType === 'edit' ? 'border-color' : 'delete'
        }
        color={colors.WHITE}
        size={22}
        />     
      }
      <Text style={styles.text}>{title}</Text>

    </TouchableOpacity>
  );
}
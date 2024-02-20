import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

 import { MaterialIcons } from '@expo/vector-icons';

import { styles, colors } from './styles';


type Props = TouchableOpacityProps & {
  title: string;
  onSubmit: ()=> void;
  iconType?: 'new' | 'edit' | 'delete' | 'none'; 
}

export function Button({title, onSubmit, iconType = 'none', ...rest}: Props){
  return(
    <TouchableOpacity 
      style={iconType !== 'delete'? styles.containerNewEdit : styles.containerDelete}
      {...rest}
      onPress={onSubmit}
    >

      {iconType !== 'none'  &&
        <MaterialIcons
        name={ 
          iconType === 'new' ? 'add' :
          iconType === 'edit' ? 'border-color' : 'delete'
        }
        color={iconType !== 'delete'?  colors.WHITE : colors.GRAY_2}
        size={22}
        />     
      }
      <Text style={iconType !== 'delete'? styles.textNewEdit : styles.textDelete}>{title}</Text>

    </TouchableOpacity>
  );
}
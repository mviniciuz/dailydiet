import { Text, View, StatusBar } from "react-native";

import { styles, colors } from './styles';

import { ButtonIcon } from '@components/ButtonIcon';

type Props = {
  title? : string;
  target?: boolean;
  onSubmit: () => void;
}

export function Navigator( { title, target, onSubmit }: Props){
  return(
    <View style={
      target === true ? styles.containerOn:
      target === false ? styles.containerOff:
      styles.container
    }>
      <StatusBar
        backgroundColor={
          target === true ? colors.GREEN_LIGHT:
          target === false ? colors.RED_LIGHT:
          colors.GRAY_5
        }
      />
      < ButtonIcon 
        iconName="arrow-back"
        color={
          target === true ? colors.GREEN_DARK:
          target === false ? colors.RED_DARK:
          colors.GRAY_2
        }
        size={30}
        onPress={onSubmit}
      />
      {title &&
        <Text style={styles.title}>{title}</Text>      
      }
     
    </View>
  );
}
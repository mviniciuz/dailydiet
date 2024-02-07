import { View, Text } from "react-native";
import { styles, colors } from './styles';

import { ButtonIcon } from '@components/ButtonIcon';

type Props = {
  title: string;
  subTitle: string;
  showIcon?: boolean;
  target: boolean;
  onSubmit?: () => void;
}

export function StatisticsCard({
   title,
   subTitle,
   showIcon = false,
   target = true,
   onSubmit,
  }: Props){
  return(
    <View style={target ? styles.containerTargetOn : styles.containerTargetOf}>
      <View style={styles.formButton}>
        {showIcon &&
          <ButtonIcon
            color={target? colors.GREEN_DARK : colors.RED_DARK}
            iconName={'arrow-outward'}
            size={24}
            onPress={onSubmit}
          />        
        }
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  )
}
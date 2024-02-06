import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles, colors } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  subTitle: string;
  showIcon: boolean;
  onSubmit?: () => void;
}

export function ResultsCard({
   title,
   subTitle,
   showIcon,
   onSubmit,
   ...rest
  }: Props){
  return(
    <View style={styles.container}>
      <View style={styles.formButton}>
        <TouchableOpacity>
          <MaterialIcons 
            name="arrow-outward"
            size={24}
            color={colors.RED_DARK}
          />
        </TouchableOpacity>

      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  )
}
import { View, Text } from "react-native";

import { styles } from './styles';

export function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Tela home</Text>
    </View>
  )
}
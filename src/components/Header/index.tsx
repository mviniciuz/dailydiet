import { View, Image} from "react-native";

import Logo from '@assets/Logo.png';
import Elpipse from '@assets/Ellipse.png';

import { styles } from './styles';

export function Header(){
  return(
    <View style={styles.container}>
      <Image style={{
        maxWidth: 120,
        maxHeight: 50,
        resizeMode: 'contain',
      }} source={Logo} />
      <Image source={Elpipse}/>
    </View>
  )
}
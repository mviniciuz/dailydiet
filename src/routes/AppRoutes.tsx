import { createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics';
import { Snack } from '@screens/Snack';
 
const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoute(){
  return(
    <Navigator
      screenOptions={ { headerShown: false } }
    >
      <Screen
        name='home'
        component={Home} 
      />
      <Screen
        name='statistics'
        component={Statistics}
      />
      <Screen
        name='snack'
        component={Snack}
      />
    </Navigator>
  )
}


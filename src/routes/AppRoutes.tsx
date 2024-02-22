import { createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics';
import { Snack } from '@screens/Snack';
import { NewSnack } from '@screens/Snack/NewSnack';
import { TargetMessage } from '@screens/Snack/TargetMessage';
import { PreviewEditSnack } from '@screens/Snack/EditSnack/PreviewEditSnack';
import { EditSnack } from '@screens/Snack/EditSnack';

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
      <Screen
        name='NewSnack'
        component={NewSnack}
      />
      <Screen
        name='TargetMessage'
        component={TargetMessage}
      />
      <Screen
        name='PreviewEditSnack'
        component={PreviewEditSnack}
      />

      <Screen
        name='EditSnack'
        component={EditSnack}
      />                               
    </Navigator>
  )
}


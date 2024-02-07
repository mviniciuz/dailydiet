import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Navigator } from '@components/Navigator';
import { StatisticsCard } from '@components/StatisticsCard';

type RouteParams = {
  target: boolean;
}

export function Statistics(){

  const navigation = useNavigation();
  
  const route = useRoute();
  const { target } = route.params as RouteParams;

  function handleBackScreen(){
    navigation.navigate('home');  
  }

  return(
    <SafeAreaView>
      <Navigator        
        title="voltar"      
        onSubmit={handleBackScreen}
        target={target}
                
      />
      <StatisticsCard
        title={'90,86%'}
        subTitle={'das refeições dentro da dieta'}        
        target={target}          
      />

    </SafeAreaView>
  );
}


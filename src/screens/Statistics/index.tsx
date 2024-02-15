import { View, Text } from 'react-native';
import { SafeAreaView} from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Navigator } from '@components/Navigator';
import { StatisticsCard } from '@components/StatisticsCard';
import { styles } from './styles';


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
    <SafeAreaView style={ target ? styles.containerOn : styles.containerOff}>
      <View style={target? styles.formHeaderOnTarget: styles.formHeaderOffTarget}>
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
      </View>
      <View style={styles.formEstatiscs}>
        <Text style={styles.textTitle}>{'Estatisticas gerais!'}</Text>
        <View style={styles.cardLarge}>
          <Text style={styles.titleCard}>{'22'}</Text>
          <Text style={styles.subtitleCard}>{'melhor sequência de prados dentro da dieta'}</Text>
        </View>
        <View style={styles.cardLarge}>
          <Text style={styles.titleCard}>{'109'}</Text>
          <Text style={styles.subtitleCard}>{'refeições registradas'}</Text>
        </View>
        <View style={styles.formCardSmall}>
           <View style={styles.cardTargetOn}>
             <Text style={styles.titleCard}>{'99'}</Text>
             <Text style={styles.subtitleCard}>{'refeições dentro da Dieta'}</Text>
              
           </View>
           <View style={styles.cardTargetOff}>
             <Text style={styles.titleCard}>{'10'}</Text>
             <Text style={styles.subtitleCard}>{'refeições fora da Dieta'}</Text>
              
           </View>         

        
        </View>        


      </View>
    </SafeAreaView>
  );
}


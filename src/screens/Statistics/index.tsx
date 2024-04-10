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
  const { target, statistics } = route.params as RouteParams;

  function handleBackScreen(){
    navigation.navigate('home');  
  }

  return(
    <SafeAreaView style={ target ? styles.containerOn : styles.containerOff}>
      <View style={target? styles.formHeaderOnTarget: styles.formHeaderOffTarget}>
        <Navigator        
          title="Go to home"      
          onSubmit={handleBackScreen}
          target={target}      
        />
        <StatisticsCard
          title={
            `${ isNaN(statistics.percentTotal) ? 0 : statistics.percentTotal.toFixed(2)}%`}
          
          subTitle={'of the snacks are into the diet!'}        
          target={target}          
        />
      </View>
      <View style={styles.formEstatiscs}>
        <Text style={styles.textTitle}>{'All statistics!'}</Text>
        <View style={styles.cardLarge}>
          <Text style={styles.titleCard}>{statistics.betterSequencyDay}</Text>
          <Text style={styles.subtitleCard}>{'Better sequency of snacks in days'}</Text>
        </View>
        <View style={styles.cardLarge}>
          <Text style={styles.titleCard}>{statistics.snacksRegister}</Text>
          <Text style={styles.subtitleCard}>{'Snacks register'}</Text>
        </View>
        <View style={styles.formCardSmall}>
           <View style={styles.cardTargetOn}>
             <Text style={styles.titleCard}>{statistics.snacksIntoOfDiet}</Text>
             <Text style={styles.subtitleCard}>{'Snacks into the diet'}</Text>
           </View>
           <View style={styles.cardTargetOff}>
             <Text style={styles.titleCard}>{statistics.snacksOutOfDiet}</Text>
             <Text style={styles.subtitleCard}>{'Snacks out of the diet'}</Text>
           </View>         
        </View>        
      </View>
    </SafeAreaView>
  );
}


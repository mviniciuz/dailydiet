import { useState, useCallback, useEffect } from 'react';
import { Text, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from "@components/Header";
import { StatisticsCard } from "@components/StatisticsCard";
import { Button } from '@components/Button';
import { SnackItem } from '@components/SnackItem';

import { snackGetAll } from '@storage/snack/snackGetAll';
import {format} from 'date-fns';

import { styles } from './styles';

export function Home(){
  const [target, setTarget] = useState(false);
  const [title, setTitle] = useState(0);
  const [statistics, setStatistics] = useState({
    percentTotal: 0,
    betterSequencyDay:0,
    snacksRegister:0,
    snacksIntoOfDiet:0,
    snacksOutOfDiet:0,
    target: false
  });

  const [snacks, setSnacks] = useState([]);

  const navigation = useNavigation();

  async function getSnacks(){

    const storage = await snackGetAll();
    const storage2 = await snackGetAll();

    setSnacks(storage2);

    const statistics = {
      percentTotal: 0,
      betterSequencyDay:0,
      snacksRegister:0,
      snacksIntoOfDiet:0,
      snacksOutOfDiet:0,
      target: false
    }

    storage2.map(snack => {
      snack.data.map( data => {
        statistics.snacksRegister = statistics.snacksRegister+1;
        if(data.target === true) {
          statistics.snacksIntoOfDiet = statistics.snacksIntoOfDiet+1; 
        } else {
          statistics.snacksOutOfDiet = statistics.snacksOutOfDiet+1;
        }
      });
      if (snack.data.length > statistics.betterSequencyDay){
        statistics.betterSequencyDay = snack.data.length;
      }
    });
    statistics.snacksRegister = statistics.snacksIntoOfDiet+statistics.snacksOutOfDiet;
    if (statistics.snacksIntoOfDiet >= statistics.snacksOutOfDiet) {
      statistics.target = true;
    }
    statistics.percentTotal = (statistics.snacksIntoOfDiet/statistics.snacksRegister)*100;

    setTarget(statistics.target);
    setTitle(statistics.percentTotal);
    setStatistics(statistics);
  }

  function handleAddSnack(){
    navigation.navigate('snack');
  }

  function handleShowStatistics(){
    navigation.navigate('statistics', { target: target, statistics: statistics});    
  }

  useFocusEffect(useCallback(()=>{
    getSnacks();
  },[]));

  return(
    <SafeAreaView style={styles.container}>
      <Header/>
      <StatisticsCard
        title={`${ isNaN(title) ? 0 : title.toFixed(1)}%`}
        subTitle={'of snacks on into the diet!'}
        showIcon={true}
        target={target}
        onSubmit={handleShowStatistics}    
      />
      <Text style={styles.textLauch}>Snacks</Text>
      <Button
        title={'New Snack'}
        onSubmit={handleAddSnack}
        iconType={"new"}
      />
      <SectionList
        style={styles.list}
        sections={snacks}
        keyExtractor={ ( item, index ) => item.text + index}
        renderItem={( { item, section:{title} } )=> (
          <SnackItem
            time={item.time}
            snack={item.name}
            target={item.target}
            onPress={()=>navigation.navigate('PreviewEditSnack', { snack: item, title:title } )}
          />
        )}
        renderSectionHeader={({section: {title}})=> <Text style={styles.textHederSection}>{`${format(title, 'dd-MM-yyyy')}`}</Text>}
      />       
    </SafeAreaView>
  )
}
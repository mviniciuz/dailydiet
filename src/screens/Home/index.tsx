import { useState, useCallback } from 'react';
import { Text, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from "@components/Header";
import { StatisticsCard } from "@components/StatisticsCard";
import { Button } from '@components/Button';
import { SnackItem } from '@components/SnackItem';

import { snackGetAll } from '@storage/snack/snackGetAll';

import { styles } from './styles';

export function Home(){
  const [target, setTarget] = useState(false);

  const [snacks, setSnacks] = useState([]);


  const navigation = useNavigation();

  async function getSnacks(){
    const storage = await snackGetAll();
    setSnacks(storage);
  }


  function handleAddSnack(){
    navigation.navigate('snack');
  }

  function handleShowStatistics(){
    navigation.navigate('statistics', { target: target });    
  }

  useFocusEffect(useCallback(()=>{
    getSnacks();
  },[]))

  return(
    <SafeAreaView style={styles.container}>
      <Header/>
      <StatisticsCard
        title={'90,86%'}
        subTitle={'of snacks on into the diet!'}
        showIcon={true}
        target={target}
        onSubmit={handleShowStatistics}    
      />
      <Text style={styles.textLauch}>Refeições</Text>
      <Button
        title={'New Snack'}
        onSubmit={handleAddSnack}
        iconType={"new"}
      />
      <SectionList
        style={styles.list}
        sections={snacks}
        keyExtractor={ ( item, index ) => item.text + index}
        renderItem={( { item } )=> (
          <SnackItem
            time={item.time}
            snack={item.name}
            target={item.target}
            onPress={() =>navigation.navigate('PreviewEditSnack', {target: target})}
          />
        )}
        renderSectionHeader={({section: {title}})=> <Text style={styles.textHederSection}>{title}</Text>}
      />       
    </SafeAreaView>
  )
}
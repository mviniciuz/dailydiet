import { useState } from 'react';
import { Text, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

import { Header } from "@components/Header";
import { StatisticsCard } from "@components/StatisticsCard";
import { Button } from '@components/Button';
import { SnackItem } from '@components/SnackItem';

import { styles } from './styles';

export function Home(){
  const [target, setTarget] = useState(true);

  const [snacks, setSnacks] = useState([
    {
      title: '01.02.24',
      data: [
        {        
          time: '20:00',
          text: 'x-tudo',
          target: false,
        },
        {
          data: '01.02.24',
          time: '19:00',
          text: 'Whey protain com leite',
          target: true,
        },
      ],
    },
    {
      title: '02.02.24',
      data: [
        {       
          time: '20:00',
          text: 'x-tudo',
          target: false,
        },
        {        
          time: '19:00',
          text: 'Whey protain com leite',
          target: true,
        },
        {        
          time: '18:00',
          text: 'Pão com carne moída',
          target: true,
        },
      ]
    }
  ]);


  const navigation = useNavigation();

  

  function handleAddSnack(){
    navigation.navigate('snack');
  }

  function handleShowStatistics(){
    navigation.navigate('statistics', { target: target });    
  }

  return(
    <SafeAreaView style={styles.container}>
      <Header/>
      <StatisticsCard
        title={'90,86%'}
        subTitle={'das refeições dentro da dieta'}
        showIcon={true}
        target={target}
        onSubmit={handleShowStatistics}    
      />
      <Text style={styles.textLauch}>Refeições</Text>
      <Button
        title={'Nova refeição'}
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
            snack={item.text}
            target={item.target}
            onPress={() =>navigation.navigate('PreviewEditSnack', {target: target})}
          />
        )}
        renderSectionHeader={({section: {title}})=> <Text style={styles.textHederSection}>{title}</Text>}
      />       
    </SafeAreaView>
  )
}
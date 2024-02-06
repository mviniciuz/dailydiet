import { useState } from 'react';
import { Text, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@components/Header";
import { ResultsCard } from "@components/ResultsCard";
import { Button } from '@components/Button';
import { SnackItem } from '@components/SnackItem';

import { styles } from './styles';

export function Home(){
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

  function handleAddSnack(){
    console.log('adiciou uma refeição');
  }

  function handleShowResults(){
    console.log('mostrar resultados')
  }

  return(
    <SafeAreaView style={styles.container}>
      <Header/>
      <ResultsCard
        title={'90,86%'}
        subTitle={'das refeições dentro da dieta'}
        showIcon={true}
        target={false}
        onSubmit={handleShowResults}        
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
          />
        )}
        renderSectionHeader={({section: {title}})=> <Text style={styles.textHederSection}>{title}</Text>}
      />       
    </SafeAreaView>
  )
}
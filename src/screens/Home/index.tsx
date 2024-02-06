import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@components/Header";
import { ResultsCard } from "@components/ResultsCard";
import { Button } from '@components/Button';

import { styles } from './styles';

export function Home(){
  function handleAddSnack(){
    console.log('adiciou uma refeição');
  }

  return(
    <SafeAreaView style={styles.container}>
      <Header/>
      <ResultsCard
        title={'90,86%'}
        subTitle={'das refeições dentro da dieta'}
        showIcon={true}
        
      />
      <Text style={styles.textLauch}>Refeições</Text>
      <Button
        title={'Nova refeição'}
        onSubmit={handleAddSnack}
        iconType={"new"}
      /> 
      
    </SafeAreaView>
  )
}
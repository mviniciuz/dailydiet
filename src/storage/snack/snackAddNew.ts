import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_COLLECTION } from "@storage/storageConfig";

import { snackGetAll } from "@storage/snack/snackGetAll";
import { Alert } from "react-native";

type Types = {
  title: string;
  name: string;
  text: string; 
  date: string;
  time: string; 
  target: boolean;
}

export async function snackAddNew({name, text, date, time, target} : Types){

  try {

    const snacks = await snackGetAll();
     
    const snack = snacks.filter(snack => snack.title === date);

    if(snack.length > 0){
      const snackFound = snack.filter(snack => snack.time === time);
      if(snackFound) {
        return Alert.alert('Refeição já cadastrada');
      }else{
        snack.data.push({
          name,
          time,
          text,
          target
        });
      }

    } else {
      snack.push({
        title: date,
        data: [
          {
            name,
            time,
            text,
            target
          }
        ]
      })
    }

   const storage = JSON.stringify([...snacks, snack]);

    await AsyncStorage.setItem(SNACK_COLLECTION, storage);
    const snacksReturn =  await AsyncStorage.getItem(SNACK_COLLECTION);
 
  } catch (error) {
    
  }

}
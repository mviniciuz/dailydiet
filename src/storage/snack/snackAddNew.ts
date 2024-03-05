import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_COLLECTION } from "@storage/storageConfig";

import { snackGetAll } from "@storage/snack/snackGetAll";
import { Alert } from "react-native";

type Types = {
  title: string;
  text: string; 
  time: string; 
  target: string;
}

export async function snackAddNew({title, text, time, target}: Types){

  try {

    const snacks = await snackGetAll();
     
    const snack = snacks.filter(snack => snack.title === title);

    if(snack){
      const snackFound = snacks.filter(sanck => snack.time === time);
      if(snackFound) {
        return Alert.alert('Refeição já cadastrada');
      }else{
        snack.data.push({
          text,
          time,
          target
        });
      }

    } else {
      snack.push({
        title,
        data: [
          {
            text,
            time,
            target
          }
        ]

      })
    }

    await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(snack));
    
  } catch (error) {
    
  }

}
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
    const index = snacks.findIndex(snack => snack.title === date);

    if(snack.length > 0){
      
      if (snack[0].data[0].time === time){

        return Alert.alert('Refeição já cadastrada');
      }else{
  
        snacks[index].data.push({
          name,
          time,
          text,
          target
        });
      }

    } else {
      snacks.push({
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

    const storage = JSON.stringify(snacks)

    await AsyncStorage.setItem(SNACK_COLLECTION, storage);
 
  } catch (error) {
    
  }

}
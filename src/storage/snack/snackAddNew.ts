import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_COLLECTION } from "@storage/storageConfig";

import { snackGetAll } from "@storage/snack/snackGetAll";
import { Alert } from "react-native";
import { format } from "date-fns";

type Types = {
  title: string;
  name: string;
  text: string; 
  date: Date;
  time: Date; 
  target: boolean;
}

export async function snackAddNew({name, text, date, time, target} : Types){

  try {

    const snacks = await snackGetAll();
     
    const snack = snacks.filter(snack => (format(snack.title, 'dd-MM-yyyy') === format(date, 'dd-MM-yyyy')));
    const index = snacks.findIndex(snack => (format(snack.title, 'dd-MM-yyyy') === format(date, 'dd-MM-yyyy')));

    if(snack.length > 0){

      if (snack[0].data.findIndex(data => (format(data.time, 'hh:mm') === format(time, 'hh:mm'))) > 0){
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
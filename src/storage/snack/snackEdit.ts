import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_COLLECTION } from "@storage/storageConfig";

import { snackGetAll } from "./snackGetAll";

type Types = {
  title: string;
  name: string;
  text: string; 
  date: Date;
  time: Date; 
  target: boolean;
}

export async function snackEdit({name, text, date, time, target} : Types){
  const snacks = await snackGetAll();

  const snackDate = snacks.filter(snack => snack.title === date.toISOString());

  if (snackDate.length > 0) {

    const snackIndex = snackDate[0].data.map((snack, index) => {
      return snack.time === time.toISOString() ? index : 0;
    });

   const index = snacks.findIndex(snack => snack.title === date.toISOString());
  
    snacks[index].data.splice(snackIndex[1], 1, {
      name,
      time,
      text,
      target
    });
  }

  const storage = JSON.stringify(snacks);

  await AsyncStorage.setItem(SNACK_COLLECTION, storage);

}
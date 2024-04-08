import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_COLLECTION } from "@storage/storageConfig";

import { snackGetAll } from "./snackGetAll";

export async function snackDelete(date:string, time: string){
  const snacks = await snackGetAll();

  const snackDate = snacks.filter(snack => snack.title === date);

  if (snackDate.length > 0) {
    const snackIndex = snackDate[0].data.map((snack, index) => {
      return snack.time === time ? index : 0;
    });

   const index = snacks.findIndex(snack => snack.title === date);
  
   snacks[index].data.splice(snackIndex[1], 1);

   if (snacks[index].data.length === 0){
    snacks.splice(index, 1);
   }
  }

  const storage = JSON.stringify(snacks);

  await AsyncStorage.setItem(SNACK_COLLECTION, storage);
}
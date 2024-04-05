import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_COLLECTION } from '@storage/storageConfig';


export async function snackGetAll(){
  try {
    const storage = await AsyncStorage.getItem(SNACK_COLLECTION);

    const snacks: string[] = storage ?  JSON.parse(storage) : [];

    console.log(snacks);

    return snacks;
    
  } catch (error) {
    throw error
  }

}
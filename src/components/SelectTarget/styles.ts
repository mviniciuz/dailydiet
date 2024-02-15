import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{    
    flexDirection: 'row',
    padding: 25,
  },
  buttonDefaut:{
    maxHeight: 50,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  }
});
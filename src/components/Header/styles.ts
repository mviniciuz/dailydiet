import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    height: 45,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    
    backgroundColor: theme.COLORS.GRAY_7,
  }

})
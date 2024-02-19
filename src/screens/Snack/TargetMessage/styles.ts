import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.WHITE,
    padding : 20
   
  },
  image: { 
    marginBottom: 50,
    
  },

  titleOn:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S32,
    color: theme.COLORS.GREEN_DARK,
    marginBottom: 16,

  },
  titleOff:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S32,
    color: theme.COLORS.RED_DARK,
    marginBottom: 16,

  },
  subTitle:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S16,
    color: theme.COLORS.GRAY_1,
    textAlign: 'center',
    marginBottom: 16,       
  }
})
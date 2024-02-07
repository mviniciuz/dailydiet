import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  containerOn:{
    height: 30,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: theme.COLORS.GREEN_LIGHT,
    paddingLeft: 20,
    paddingRight: 20, 
  },
  containerOff:{
    height: 30,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: theme.COLORS.RED_LIGHT,
    paddingLeft: 20,
    paddingRight: 20,   
  },
  container:{
    height: 30,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: theme.COLORS.GRAY_5,
    paddingLeft: 20,
    paddingRight: 20,   
  },
  title:{
    width: '100%',
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S18,
    color: theme.COLORS.GRAY_1,
    textAlign:'center',
    paddingRight: '15%'
  }  
});

export const colors = theme.COLORS;

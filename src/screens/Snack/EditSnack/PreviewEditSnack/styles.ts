import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: theme.COLORS.GREEN_LIGHT
  },
  containerOff: {
    flex: 1,
    backgroundColor: theme.COLORS.RED_LIGHT
  },
  formHeaderOnTarget:{
    justifyContent: 'center',
    height: 100,
    backgroundColor: theme.COLORS.GREEN_LIGHT,
   
  },
  formHeaderOffTarget:{
    justifyContent: 'center',
    height: 100,
    backgroundColor: theme.COLORS.RED_LIGHT,
   
  },
  formContent:{
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  title:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S24,
    color: theme.COLORS.GRAY_1,
    marginBottom: 10,

  },
  subTitle:{
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.S18,
    color: theme.COLORS.GRAY_2,
    marginBottom: 16,    
  },
 
  dataTime:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S16,
    color: theme.COLORS.GRAY_1,
  }
  
})
  
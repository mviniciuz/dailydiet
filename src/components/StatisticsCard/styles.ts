import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  containerTargetOn: {
    height: 115,
    width:'100%',    
    alignItems: 'center',
    padding: 6,   
    marginBottom: 25,
    borderRadius: 12,
    backgroundColor: theme.COLORS.GREEN_LIGHT
  },
  containerTargetOf: {
    height: 115,
    width:'100%',    
    alignItems: 'center',
    padding: 6,  
    marginBottom: 25,
    borderRadius: 12,
    backgroundColor: theme.COLORS.RED_LIGHT
  },

  formButton:{    
    height: 24,
    alignSelf: 'flex-end',
  },
  title:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S32,
    color: theme.COLORS.GRAY_2,
  },
  subTitle:{
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.S14,
    color: theme.COLORS.GRAY_2,
  }
});

export const colors = theme.COLORS;
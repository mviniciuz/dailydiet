import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    height: 49,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: theme.COLORS.GRAY_5,
    borderWidth: 1.5,
    marginBottom: 10,
    
  },
  textTime:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S12,
    color: theme.COLORS.GRAY_1,
    minWidth: '20%',
    borderRightWidth: 2,
    borderColor: theme.COLORS.GRAY_5,
    textAlign: 'center'

  },
  textSnack: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.S16,
    color: theme.COLORS.GRAY_1,
    minWidth: '70%',
    paddingLeft: 12,
  }
});

export const colors = theme.COLORS;

import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    maxHeight: 55,
    minHeight: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_2,
    borderRadius: 6
  },
  text: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S14,
    color: theme.COLORS.WHITE,
    marginLeft: 12
  }

});

export const colors = theme.COLORS;
import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    maxHeight: 50,
    minHeight: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_2,
    borderRadius: 12
  },
  text: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S14,
    color: theme.COLORS.WHITE,
    marginLeft: 12
  }

});

export const colors = theme.COLORS;
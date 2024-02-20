import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  containerNewEdit:{
    maxHeight: 55,
    minHeight: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_2,
    borderRadius: 6,
    marginBottom: 6
  },

  containerDelete:{
    maxHeight: 55,
    minHeight: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 6,
    marginBottom: 6,
    borderWidth: 2,
    borderColor: theme.COLORS.GRAY_2,
  },
  textNewEdit: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S14,
    color: theme.COLORS.WHITE,
    marginLeft: 7
  },

  textDelete: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S14,
    color: theme.COLORS.GRAY_2,
    marginLeft: 7
  }  

});

export const colors = theme.COLORS;
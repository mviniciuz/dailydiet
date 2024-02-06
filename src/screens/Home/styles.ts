import { StyleSheet } from "react-native";

import {theme} from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_7,
    padding: 30,
  },
  text: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.S24,
  },
  textLauch:{
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.S16,
    color: theme.COLORS.GRAY_2,
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
  }
});
import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_7,
    padding: 25,
  },
  list:{
    flex:1,
    width:'100%',      
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
  },
  textHederSection:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S18,
    color: theme.COLORS.GRAY_1,
    marginTop: 20,
    marginBottom: 10,
  }
});
import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  containerOn:{
    flex: 1,    
    backgroundColor: theme.COLORS.GREEN_LIGHT,
  },
  containerOff:{
    flex: 1,
    backgroundColor: theme.COLORS.RED_LIGHT,
  },    
  formHeaderOnTarget:{
    backgroundColor: theme.COLORS.GREEN_LIGHT,
  },
  formHeaderOffTarget:{
    backgroundColor: theme.COLORS.RED_LIGHT,
  },
  formEstatiscs:{
    flex:1,
    padding: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    backgroundColor: theme.COLORS.WHITE,
  },
  textTitle:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S14,
    color: theme.COLORS.GRAY_1,
    width  : '100%',
    textAlign: 'center',
    marginBottom: 40,
  },
  cardLarge:{
    height: 89,
    width: '100%',
    backgroundColor: theme.COLORS.GRAY_6,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12
  },  
  titleCard:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S24,
    color: theme.COLORS.GRAY_1,
    width  : '100%',
    textAlign: 'center',
    marginBottom: 6
    },
  subtitleCard:{
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.S14,
    color: theme.COLORS.GRAY_1,
    width  : '100%',
    textAlign: 'center',  
  },
  formCardSmall:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  cardTargetOn:{
    height: 107,
    width: '48%',
    backgroundColor: theme.COLORS.GREEN_LIGHT,
    padding: 16,
    borderRadius: 8,
  },
  cardTargetOff:{
    height: 107,
    width: '48%',
    backgroundColor: theme.COLORS.RED_LIGHT,
    padding: 16,
    borderRadius: 8
  }
});

export const colors = theme.COLORS;
import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

    
  },

  buttonDefault:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    
    minHeight: 50,
    maxHeight: 50,

    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_7,
    borderRadius: 6,
    marginBottom: 25,

    marginRight: 5,

    backgroundColor: theme.COLORS.GRAY_6

  },

  buttonOnTarget:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    
    minHeight: 50,
    maxHeight: 50,

    borderWidth: 1,
    borderColor: theme.COLORS.GREEN_DARK,
    borderRadius: 6,
    marginBottom: 25,

    marginRight: 5,

    backgroundColor: theme.COLORS.GREEN_LIGHT,
    

  },

  buttonOffTarget:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    minHeight: 50,
    maxHeight: 50,

    borderWidth: 1,
    borderColor: theme.COLORS.RED_DARK,
    borderRadius: 6,
    marginBottom: 25,

    marginLeft: 5,
    backgroundColor: theme.COLORS.RED_LIGHT

  }
});

export const colors = theme.COLORS;
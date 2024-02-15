import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_5
  },
  formHeader: {    
    height: 70,
    justifyContent: 'center',
    backgroundColor: theme.COLORS.GRAY_5
  
  },
  formContent:{    
    flex:1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: theme.COLORS.WHITE,
  }
});

export const colors = theme.COLORS;
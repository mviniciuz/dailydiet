import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  formContent:{
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.COLORS.WHITE,
   
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContainer:{
    flex: 1,
    justifyContent: 'flex-end',   
  },  
  dataTime:{ 
    
    flexDirection: 'row'
  },
  data: {
    flex:1,
    marginRight: 5,  

  },
  time:{
    flex:1,
    marginLeft: 5
 

  },
  title:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.S14,
    marginBottom: 4,

  },
  inputName:{
    minHeight: 48,
    maxHeight: 48,

    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_5,
    borderRadius: 6,
    marginBottom: 25,

  },
  inputDescription:{
    minHeight: 120,
    maxHeight: 120,

    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_5,
    borderRadius: 6,
    marginBottom: 25

  },
  inputDataTime:{
    minHeight: 48,
    maxHeight: 48,

    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_5,
    borderRadius: 6,
    marginBottom: 25

  }
})
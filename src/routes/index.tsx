import { NavigationContainer } from "@react-navigation/native";

import { AppRoute } from "./AppRoutes";

export function Routes(){
  return(
    <NavigationContainer>
      <AppRoute/>
    </NavigationContainer>
  )
}
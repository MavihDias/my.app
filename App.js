import React from "react" ;
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import TelaInicio from "./Componentes/TelaInicio";
import TelaMeio from "./Componentes/TelaMeio";
import TelaFim from "./Componentes/TelaFim";

const tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
     <Tabs.Navigator>
      <Tabs.Screen name="Inicio" component = { TelaInicio }/>
      <Tabs.Screen name="Meio" component = { TelaMeio } />
      <Tabs.Screen name="Fim" component = { TelaFim } />
    </Tabs.Navigator>
   </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

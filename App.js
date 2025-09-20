// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TarefaFormScreen from "./src/screens/TarefaScreen";
import TarefaDetalheScreen from "./src/screens/TarefaDetalheScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={TarefaFormScreen} />
        <Stack.Screen name="Detalhe" component={TarefaDetalheScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

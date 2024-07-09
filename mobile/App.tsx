// How to import the login choce page from screens folder

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginChoice from './src/screens/LoginChoice';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginChoice" component={LoginChoice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
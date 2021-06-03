import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import layar1 from './layar1';
import layar2 from './layar2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="satu" component={layar1} />
        <Stack.Screen name="dua" component={layar2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})

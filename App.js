import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './Screens/Onboarding';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Login1 from './Screens/Login1';
import Login2 from './Screens/Login2';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Onboarding' component={OnboardingScreen} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Login1' component={Login1} />
          <Stack.Screen name='Login2' component={Login2} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

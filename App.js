import { StatusBar } from 'expo-status-bar';
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
    <View style={styles.container}>
      {/* <OnboardingScreen/> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Onboarding' component={OnboardingScreen} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Login1' component={Login1} />
          <Stack.Screen name='Login2' component={Login2} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

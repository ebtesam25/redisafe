import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Welcome from './src/screens/welcome';
import Login from './src/screens/login';
import Register from './src/screens/register';
import Metrics from './src/screens/metrics';
import Calibrate from './src/screens/calibrate';
import Home from './src/screens/home';
import Map from './src/screens/map';
import Notif from './src/screens/notifications';
import Home2 from './src/screens/home2';


const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Metrics" 
        component={Metrics} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Calibrate" 
        component={Calibrate} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Home2" 
        component={Home2} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Map" 
        component={Map} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Notif" 
        component={Notif} 
        options={{ headerShown: false}} 
      />  
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
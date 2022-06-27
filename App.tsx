import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import LogInScreen from './screens/LogInScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {isLoggedIn ? <BottomTabNavigator /> : <LogInScreen />}
    </NavigationContainer>
  );
}

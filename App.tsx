import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthStackNavigator from './navigation/AuthStackNavigator';

import BottomTabNavigator from './navigation/BottomTabNavigator';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        {isLoggedIn ? <BottomTabNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

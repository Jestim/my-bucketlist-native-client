import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, Alert, StyleSheet } from 'react-native';
import jwtDecode from 'jwt-decode';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { getJWT } from './helpers/secureStore';
import { User } from './types/ContextTypes';
import UserDetailsContext, { initialUserState } from './context/UserContext';
import colors from './styles/colors';
import jwtSecureStoreKey from './helpers/variables';
import host from './helpers/host';

function App() {
  const [userState, setUserState] = useState<User>(initialUserState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userDetails = useMemo(
    () => ({
      userState,
      setUserState,
    }),
    [userState, setUserState],
  );

  useEffect(() => {
    setIsLoading(true);
    // Check if JWT is stored on device
    const getJWTFromSecureStore = async () => {
      const jwtTokenFromSecureStore = await getJWT(jwtSecureStoreKey);
      console.log(jwtTokenFromSecureStore);

      // If JWT exists then check if it is still valid
      if (jwtTokenFromSecureStore) {
        // Extract JWT payload
        const jwtPayload: { exp: string; iat: string; sub: string } = jwtDecode(
          jwtTokenFromSecureStore,
        );

        // If JWT has not expired
        if (jwtPayload.exp > Date.now().toString()) {
          const response = await fetch(`${host}/api/auth/isLoggedIn`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${jwtTokenFromSecureStore}`,
              'Content-Type': 'application/json',
            },
          });

          console.log(response.status);

          if (response.ok) {
            // Set userState with userID, JWT and isLoggedIn
            const newUserState: User = {
              userId: jwtPayload.sub,
              jwtToken: jwtTokenFromSecureStore,
              jwtExp: jwtPayload.exp,
              isLoggedIn: true,
            };

            setUserState(newUserState);
          }
        }
      }

      setIsLoading(false);
    };

    // If its not valid return
    getJWTFromSecureStore().catch((err) => {
      console.log(err);
      alert(err.message);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={colors.light}
            style={styles.spinner}
          />
        ) : (
          <UserDetailsContext.Provider value={userDetails}>
            {userState.isLoggedIn ? (
              <BottomTabNavigator />
            ) : (
              <AuthStackNavigator />
            )}
          </UserDetailsContext.Provider>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

export default App;

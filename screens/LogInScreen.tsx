import { useContext, useState } from 'react';
import {
  Pressable,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import jwtDecode from 'jwt-decode';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import { LoginScreenProps } from '../types/NavigationTypes';
import host from '../helpers/host';
import UserDetailsContext from '../context/UserContext';
import {
  CurrentUserDetailsContextType,
  CurrentUser,
} from '../types/ContextTypes';
import { saveJWT } from '../helpers/secureStore';
import jwtSecureStoreKey from '../helpers/variables';

function LogInScreen({ navigation }: LoginScreenProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { setCurrentUserState } = useContext(
    UserDetailsContext,
  ) as CurrentUserDetailsContextType;

  const handleLogIn = async () => {
    console.log('handleLogIn called');

    const loginInfo = {
      username,
      password,
    };

    try {
      const response = await fetch(`${host}/api/auth/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });

      if (response.ok) {
        const jwtTokenFromServer: { token: string } = await response.json();

        await saveJWT(jwtSecureStoreKey, jwtTokenFromServer.token);

        // Extract userID from JWT
        const jwtData: { exp: string; iat: string; sub: string } = jwtDecode(
          jwtTokenFromServer.token,
        );

        // Set currentUserState with userID, JWT and isLoggedIn
        const newUserState: CurrentUser = {
          userId: jwtData.sub,
          jwtToken: jwtTokenFromServer.token,
          jwtExp: jwtData.exp,
          isLoggedIn: true,
        };

        setUsername('');
        setPassword('');
        setCurrentUserState(newUserState);
      } else {
        console.log(response.status);
      }
    } catch (err: any) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <>
      <HeaderComponent title="Log In" />
      <MainComponent>
        <KeyboardAvoidingView style={styles.logInContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor={colors.light}
            autoCapitalize="none"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={colors.light}
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) =>
                pressed ? [styles.button, styles.buttonPresed] : styles.button
              }
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) =>
                pressed ? [styles.button, styles.buttonPresed] : styles.button
              }
              onPress={handleLogIn}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </MainComponent>
    </>
  );
}

const styles = StyleSheet.create({
  logInContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 8,
    backgroundColor: colors.secondary,
  },
  buttonPresed: {
    opacity: 0.5,
  },
  buttonText: {
    color: colors.light,
  },
  textInput: {
    marginBottom: 24,
    paddingLeft: 12,
    paddingVertical: 12,
    width: '60%',
    fontSize: fontSizes.small,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.light,
    color: colors.light,
  },
});

export default LogInScreen;

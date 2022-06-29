import { useCallback, useState } from 'react';
import {
  Pressable,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import { LoginScreenProps } from '../types';

function LogInScreen({ navigation }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);

    setUsername('');
    setPassword('');
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
            value={username}
            onChangeText={(text) => {
              setUsername(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={colors.light}
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
              onPress={handleLogIn}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
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

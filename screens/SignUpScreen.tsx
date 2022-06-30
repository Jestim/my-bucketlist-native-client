import {
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';
import { SignUpScreenProps } from '../types/NavigationTypes';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import host from '../helpers/host';

function SignUpScreen({ navigation }: SignUpScreenProps) {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const handleSignUp = async () => {
    const newUserInfo = {
      username,
      email,
      password,
      firstName,
      lastName,
      age,
    };

    try {
      const res = await fetch(`${host}/api/auth/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserInfo),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    setUsername('');
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setAge('');
    navigation.goBack();
  };

  return (
    <>
      <HeaderComponent title="Sign Up" />
      <MainComponent>
        <ScrollView
          style={styles.SignUpContainer}
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="always"
        >
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
            placeholder="Email"
            placeholderTextColor={colors.light}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={colors.light}
            value={password}
            secureTextEntry
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            placeholderTextColor={colors.light}
            value={firstName}
            onChangeText={(text) => {
              setFirstName(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            placeholderTextColor={colors.light}
            value={lastName}
            onChangeText={(text) => {
              setLastName(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Age"
            placeholderTextColor={colors.light}
            value={age}
            onChangeText={(text) => {
              setAge(text);
            }}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) =>
                pressed ? [styles.button, styles.buttonPresed] : styles.button
              }
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={styles.buttonText}>Go Back</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) =>
                pressed ? [styles.button, styles.buttonPresed] : styles.button
              }
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
        </ScrollView>
      </MainComponent>
    </>
  );
}

const styles = StyleSheet.create({
  SignUpContainer: {
    flex: 1,
    width: '100%',
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  buttonContainer: {
    marginTop: 12,
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
    marginBottom: 12,
    paddingLeft: 12,
    paddingVertical: 6,
    width: '60%',
    fontSize: fontSizes.small,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.light,
    color: colors.light,
  },
});

export default SignUpScreen;

import {
  Pressable,
  TextInput,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Modal,
} from 'react-native';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useIsFocused } from '@react-navigation/native';
import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';
import { SignUpScreenProps } from '../types/NavigationTypes';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import host from '../helpers/host';
import SignUpInputType from '../types/SignUpInputType';
import {
  initialSignUpInput,
  initialErrorState,
} from '../helpers/initialValues';
import validateSignUpInput from '../helpers/signUpInputValidation';
import ErrorsType from '../types/ErrorsType';

function SignUpScreen({ navigation }: SignUpScreenProps) {
  const [signUpInput, setSignUpInput] =
    useState<SignUpInputType>(initialSignUpInput);

  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorsType>(initialErrorState);

  const isFocused = useIsFocused();

  useEffect(() => {
    setErrors(initialErrorState);
  }, [isFocused]);

  useEffect(() => {
    setErrors({ ...errors, isShown: true });
  }, [errors.messages]);

  const handleSignUp = async () => {
    const validationResult = validateSignUpInput(signUpInput);

    if (validationResult.length > 0) {
      setErrors({ ...errors, messages: validationResult });
      return;
    }

    try {
      const response = await fetch(`${host}/api/auth/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpInput),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setSuccess(true);
      } else {
        throw new Error('Something whent wrong');
      }
    } catch (err: any) {
      setErrors({ ...errors, messages: err.messages });
      console.log(err);
    }
  };

  return (
    <>
      <HeaderComponent title="Sign Up" />
      <MainComponent>
        <Modal transparent visible={success}>
          <View style={styles.modalConatiner}>
            <View style={styles.successAlertContainer}>
              <Text style={styles.modalText}>User created successfully!</Text>
              <Pressable
                onPress={() => {
                  setSignUpInput(initialSignUpInput);
                  setSuccess(false);
                  navigation.goBack();
                }}
              >
                <Text>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {errors.isShown && errors.messages.length > 0 ? (
          <View>
            {errors.messages.map((error: string) => (
              <Text key={uuidv4()}>{error}</Text>
            ))}
          </View>
        ) : null}
        <ScrollView
          style={styles.SignUpContainer}
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="always"
        >
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor={colors.light}
            value={signUpInput.username}
            onChangeText={(text) => {
              setSignUpInput({ ...signUpInput, username: text });
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor={colors.light}
            value={signUpInput.email}
            onChangeText={(text) => {
              setSignUpInput({ ...signUpInput, email: text });
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={colors.light}
            value={signUpInput.password}
            secureTextEntry
            onChangeText={(text) => {
              setSignUpInput({ ...signUpInput, password: text });
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            placeholderTextColor={colors.light}
            value={signUpInput.confirmPassword}
            secureTextEntry
            onChangeText={(text) => {
              setSignUpInput({ ...signUpInput, confirmPassword: text });
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            placeholderTextColor={colors.light}
            value={signUpInput.firstName}
            onChangeText={(text) => {
              setSignUpInput({ ...signUpInput, firstName: text });
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            placeholderTextColor={colors.light}
            value={signUpInput.lastName}
            onChangeText={(text) => {
              setSignUpInput({ ...signUpInput, lastName: text });
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Age"
            placeholderTextColor={colors.light}
            value={signUpInput.age}
            onChangeText={(text) => {
              setSignUpInput({ ...signUpInput, age: text });
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
  modalConatiner: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.opaqueWhite,
  },
  successAlertContainer: {
    width: '70%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 48,
  },
  modalText: {
    color: colors.light,
    fontSize: fontSizes.large,
    backgroundColor: colors.secondary,
  },
});

export default SignUpScreen;

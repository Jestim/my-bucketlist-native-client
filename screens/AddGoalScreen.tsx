import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import { GoalsScreenProps } from '../types/NavigationTypes';
import host from '../helpers/host';
import { CurrentUserDetailsContextType } from '../types/ContextTypes';
import UserDetailsContext, { initialUserState } from '../context/UserContext';

function AddGoalScreen({ navigation }: GoalsScreenProps) {
  const { currentUserState } = useContext(
    UserDetailsContext,
  ) as CurrentUserDetailsContextType;

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [location, setLocation] = useState<string>();

  const handleSubmitGoal = async () => {
    const newGoal = {
      title,
      description,
      location,
    };

    try {
      const response = await fetch(`${host}/api/goals`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUserState.jwtToken}`,
        },
        body: JSON.stringify(newGoal),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert('New goal created');
      }
    } catch (err: any) {
      console.log(err);
      alert(err.message);
    }
    setTitle('');
    setDescription('');
    setLocation('');
    navigation.goBack();
  };

  return (
    <>
      <HeaderComponent title="Add Goal" />
      <MainComponent>
        <KeyboardAvoidingView style={styles.SignUpContainer} behavior="height">
          <ScrollView
            style={styles.SignUpContainer}
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="always"
          >
            <TextInput
              style={styles.textInput}
              placeholder="Title"
              placeholderTextColor={colors.light}
              value={title}
              onChangeText={(text) => {
                setTitle(text);
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Description"
              placeholderTextColor={colors.light}
              value={description}
              multiline
              onChangeText={(text) => {
                setDescription(text);
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Location"
              placeholderTextColor={colors.light}
              value={location}
              onChangeText={(text) => {
                setLocation(text);
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
                onPress={handleSubmitGoal}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
  descriptionTextInput: {
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

export default AddGoalScreen;

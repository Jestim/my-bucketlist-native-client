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
import { GoalDetailsScreenProps } from '../types/NavigationTypes';
import host from '../helpers/host';
import { UserDetailsContextType } from '../types/ContextTypes';
import UserDetailsContext from '../context/UserContext';
import IGoal from '../types/GoalType';
import { initialGoalState } from '../helpers/initialValues';

function EditGoalScreen(props: GoalDetailsScreenProps) {
  const {
    route: {
      params: { goalId },
    },
    navigation,
  } = props;

  const { userState } = useContext(
    UserDetailsContext,
  ) as UserDetailsContextType;

  const [goalData, setGoalData] = useState<IGoal>(initialGoalState);

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchGoalDetails = async () => {
      try {
        const response = await fetch(
          `${host}/api/users/${userState.userId}/goals/${goalId}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${userState.jwtToken}`,
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setGoalData(data);
        } else {
          console.log(response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (isFocused) {
      fetchGoalDetails().catch((err: any) => console.log(err));
    }
  }, [isFocused]);

  const handleSubmitGoal = async () => {
    console.log('Updated called');

    try {
      const response = await fetch(`${host}/api/goals/${goalId}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userState.jwtToken}`,
        },
        body: JSON.stringify(goalData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert('Goal Updated');
      }
    } catch (err: any) {
      console.log(err);
      alert(err.message);
    }
    navigation.goBack();
  };

  return (
    <>
      <HeaderComponent title="Edit Goal" />
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
              value={goalData.title}
              onChangeText={(text) => {
                setGoalData({ ...goalData, title: text });
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Description"
              placeholderTextColor={colors.light}
              value={goalData.description}
              multiline
              onChangeText={(text) => {
                setGoalData({ ...goalData, description: text });
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Location"
              placeholderTextColor={colors.light}
              value={goalData.location}
              onChangeText={(text) => {
                setGoalData({ ...goalData, location: text });
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

export default EditGoalScreen;

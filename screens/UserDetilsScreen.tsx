import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useContext, useState } from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';
import {
  GoalDetailsScreenProps,
  UserDetailsScreenProps,
} from '../types/NavigationTypes';
import UserDetailsContext from '../context/UserContext';
import { UserDetailsContextType } from '../types/ContextTypes';
import host from '../helpers/host';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import IUser from '../types/userType';

function UserDetailsScreen(props: UserDetailsScreenProps) {
  const {
    route: {
      params: { userId },
    },
    navigation,
  } = props;

  const { userState } = useContext(
    UserDetailsContext,
  ) as UserDetailsContextType;

  const [userData, setUserData] = useState<IUser | null>(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchGoalDetails = async () => {
      try {
        const response = await fetch(`${host}/api/users/${userId}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${userState.jwtToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUserData(data);
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

  return (
    <>
      <HeaderComponent title="User Details" />
      <MainComponent>
        {userData ? (
          <View style={styles.userContainer}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>{userData.username}</Text>
            </View>
            <View style={styles.userDetailsContainer}>
              <Text style={styles.detailsText}>{userData.name}</Text>
              <Text style={styles.detailsText}>{userData.age}</Text>
            </View>
          </View>
        ) : null}
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }
          onPress={() => {
            console.log('add friend');
          }}
        >
          <Text style={styles.buttonText}>Add Friend</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.backButton, styles.pressed] : styles.backButton
          }
          pressRetentionOffset={{ bottom: 20, left: 20, right: 20, top: 20 }}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={42} color={colors.light} />
        </Pressable>
      </MainComponent>
    </>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    alignItems: 'center',
    width: '75%',
    marginVertical: 16,
    paddingHorizontal: 8,
    paddingTop: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.light,
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  headerTextContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  headerText: {
    color: colors.light,
    fontSize: fontSizes.medium,
  },
  userDetailsContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailsText: {
    color: colors.light,
    fontSize: fontSizes.small,
    marginBottom: 8,
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
    position: 'absolute',
    bottom: 36,
    right: 36,
  },
  buttonText: {
    color: colors.light,
  },
  backButton: {
    position: 'absolute',
    bottom: 36,
    left: 36,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default UserDetailsScreen;

/* eslint-disable no-nested-ternary */
import { View, Text, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useContext, useState } from 'react';
import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';
import { UserDetailsScreenProps } from '../types/NavigationTypes';
import UserDetailsContext from '../context/UserContext';
import { CurrentUserDetailsContextType } from '../types/ContextTypes';
import host from '../helpers/host';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import IUser from '../types/userType';
import AddFriendButton from '../components/AddFriendButton';
import GoBackButton from '../components/GoBackButton';
import ErrorsType from '../types/ErrorsType';
import { initialErrorState, placeholderUser } from '../helpers/initialValues';
import ErrorCard from '../components/ErrorCard';

function UserDetailsScreen(props: UserDetailsScreenProps) {
  const {
    route: {
      params: { userId },
    },
    navigation,
  } = props;

  const { currentUserState } = useContext(
    UserDetailsContext,
  ) as CurrentUserDetailsContextType;

  const [userData, setUserData] = useState<IUser>(placeholderUser);
  const [errors, setErrors] = useState<ErrorsType>(initialErrorState);

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchGoalDetails = async () => {
      try {
        const response = await fetch(`${host}/api/users/${userId}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${currentUserState.jwtToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
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

  if (!userData) {
    setErrors({
      isShown: true,
      messages: ['Could not find user'],
    });
  }

  return (
    <>
      <HeaderComponent title="User Details" />
      <MainComponent>
        {errors.isShown ? (
          <ErrorCard messages={errors.messages} />
        ) : userData ? (
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
        <GoBackButton navigation={navigation} />
        <AddFriendButton
          friendData={userData}
          currentUserState={currentUserState}
        />
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

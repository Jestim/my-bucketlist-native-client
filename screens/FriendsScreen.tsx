import React, { useContext, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';
import StandardTextComponent from '../components/StandardTextComponent';
import CurrentUserDetailsContext from '../context/UserContext';
import { CurrentUserDetailsContextType } from '../types/ContextTypes';
import IUser from '../types/userType';
import host from '../helpers/host';
import ErrorsType from '../types/ErrorsType';
import { initialErrorState } from '../helpers/initialValues';
import FriendCardComponent from '../components/FriendCardComponent';
import { FriendsScreenProps } from '../types/NavigationTypes';
import ErrorCard from '../components/ErrorCard';

function FriendsScreen({ navigation }: FriendsScreenProps) {
  console.log('FriendsScreen rendering');

  const { currentUserState } = useContext(
    CurrentUserDetailsContext,
  ) as CurrentUserDetailsContextType;

  const [friends, setFriends] = useState<IUser[] | null>(null);
  const [errors, setErrors] = useState<ErrorsType>(initialErrorState);

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchFriends = async () => {
      const response = await fetch(`${host}/api/users/friends`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${currentUserState.jwtToken}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setFriends(data.friends);
      } else {
        throw new Error(`${response.status}: ${data.message}`);
      }
    };

    if (isFocused) {
      fetchFriends().catch((err) => {
        setErrors({
          isShown: true,
          messages: [err.message],
        });
      });
    }
  }, [isFocused]);

  return (
    <>
      <HeaderComponent title="Friends" />
      <MainComponent>
        {friends && !errors.isShown ? (
          <ScrollView
            style={styles.goalsContainer}
            contentContainerStyle={styles.scrollView}
          >
            {friends.length > 0 ? (
              friends.map((friend) => (
                <FriendCardComponent
                  friend={friend}
                  navigation={navigation}
                  key={friend.id}
                />
              ))
            ) : (
              <StandardTextComponent text="You don't have any friends yet" />
            )}
          </ScrollView>
        ) : (
          <ErrorCard messages={errors.messages} />
        )}
      </MainComponent>
    </>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
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
  addGoal: {
    position: 'absolute',
    bottom: 36,
    right: 36,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default FriendsScreen;

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import IUser from '../types/userType';
import { CurrentUser } from '../types/ContextTypes';
import colors from '../styles/colors';
import host from '../helpers/host';

type Props = {
  friendData: IUser | null;
  currentUserState: CurrentUser;
};

function AddFriendButton({ friendData, currentUserState }: Props) {
  const [friendUserData, setFriendUserData] = useState<IUser>();

  useEffect(() => {
    if (friendData) {
      setFriendUserData(friendData);
    }
  }, [friendData]);

  const handleAddFriend = async () => {
    if (!friendUserData) {
      return;
    }

    try {
      const response = await fetch(`${host}/api/users/friends`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${currentUserState.jwtToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(friendUserData.id),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setFriendUserData(data);
      }
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  if (
    friendUserData?.id === currentUserState.userId ||
    friendUserData?.friends.includes(currentUserState.userId)
  ) {
    return null;
  }

  // eslint-disable-next-line consistent-return
  friendUserData?.friendRequests.forEach((friendRequest) => {
    if (
      friendRequest.userId === currentUserState.userId &&
      friendRequest.status === 'pending'
    ) {
      return (
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }
          onPress={() => {
            console.log('Cancel friend request');
          }}
        >
          <Text style={styles.buttonText}>Cancel Friendrequest</Text>
        </Pressable>
      );
    }

    if (
      friendRequest.userId === currentUserState.userId &&
      friendRequest.status === 'rejected'
    ) {
      return (
        <View style={styles.button}>
          <Text style={styles.buttonText}>Friendrequest rejected</Text>
        </View>
      );
    }
  });

  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.button, styles.pressed] : styles.button
      }
      onPress={handleAddFriend}
    >
      <Text style={styles.buttonText}>Add Friend</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  pressed: {
    opacity: 0.5,
  },
});

export default AddFriendButton;

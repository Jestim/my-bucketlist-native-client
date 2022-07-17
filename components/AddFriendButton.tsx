import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import IUser from '../types/userType';
import { CurrentUser } from '../types/ContextTypes';
import colors from '../styles/colors';
import host from '../helpers/host';

type Props = {
  friendData: IUser | null;
  currentUserState: CurrentUser;
};

function AddFriendButton({ friendData, currentUserState }: Props) {
  const [friendUserData, setFriendUserData] = useState<IUser | null>(
    friendData,
  );

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

  const handleCancelFriendRequest = () => {
    // TODO
    console.log('handleCancelFriendRequest called');
  };

  // show no button if the current user is the same as the displayed user
  // or if the current user and displayed are user already friends
  if (
    friendUserData?.id === currentUserState.userId ||
    friendUserData?.friends.includes(currentUserState.userId)
  ) {
    return null;
  }

  if (friendUserData) {
    for (let i = 0; i < friendUserData?.friendRequests.length; i++) {
      // if request is already sent and pending show a button to cancel friend request
      if (
        friendUserData.friendRequests[i].userId === currentUserState.userId &&
        friendUserData.friendRequests[i].status === 'pending'
      ) {
        return (
          <Pressable
            style={({ pressed }) =>
              pressed ? [styles.button, styles.pressed] : styles.button
            }
            onPress={handleCancelFriendRequest}
          >
            <Text style={styles.buttonText} testID="buttonText">
              Cancel Friend Request
            </Text>
          </Pressable>
        );
      }

      // if friend request has been rejected show an unpressable button
      if (
        friendUserData.friendRequests[i].userId === currentUserState.userId &&
        friendUserData.friendRequests[i].status === 'rejected'
      ) {
        return (
          <View style={styles.button}>
            <Text style={styles.buttonText} testID="buttonText">
              Friend Request Rejected
            </Text>
          </View>
        );
      }
    }
  }

  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.button, styles.pressed] : styles.button
      }
      onPress={handleAddFriend}
      testID="pressable"
    >
      <Text style={styles.buttonText} testID="buttonText">
        Add Friend
      </Text>
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

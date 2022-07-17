import { render } from '@testing-library/react-native';
import AddFriendButton from '../AddFriendButton';
import {
  userWithoutFriends,
  currentUserState,
  currentUser,
} from '../../helpers/testHelpers/addFriendButtonHelpers';
import IUser, { IFriendRequest } from '../../types/userType';

describe('<AddFriendButton>', () => {
  describe('if the current user is the same as the user displayed in the UserDetailsScreen', () => {
    // If current user is the same user as the one displayed on userdetails screen show no button
    it('should return null', () => {
      const button = render(
        <AddFriendButton
          friendData={currentUser}
          currentUserState={currentUserState}
        />,
      );

      expect(button.toJSON()).toBeNull();
    });
  });

  describe('if the current user is not friends or has not sent a friend request to the user displayed in UserDetailsScreen', () => {
    // If current user is not friends with the displayed user on UserDetailsScreen render 'add friend' button
    it('should render a button with the text "Add Friend"', () => {
      const button = render(
        <AddFriendButton
          friendData={userWithoutFriends}
          currentUserState={currentUserState}
        />,
      );

      const buttonText = button.queryByTestId('buttonText');

      if (!buttonText) {
        throw new Error('Button text is null');
      }
      expect(buttonText?.props.children).toBe('Add Friend');
    });
  });

  describe('if the current user is already friends with the user displayed in UserDetailsScreen', () => {
    // If current user is already friends with the user that is displayed show no button
    it('should return null ', () => {
      const friendsArray = [currentUserState.userId];

      const userWithFriends = {
        ...userWithoutFriends,
        friends: friendsArray,
      };

      const button = render(
        <AddFriendButton
          friendData={userWithFriends}
          currentUserState={currentUserState}
        />,
      );

      expect(button.toJSON()).toBeNull();
    });
  });

  describe('if friend request status is pending', () => {
    // If current user has sent a request with current status "pending" show 'cancel friend request' button
    it('should render a button with text "Cancel Friend Request"', () => {
      const friendRequest: IFriendRequest = {
        userId: currentUserState.userId,
        status: 'pending',
      };

      const friendRequestArray = [friendRequest];

      const userWithPendingFriendRequest: IUser = {
        ...userWithoutFriends,
        friendRequests: friendRequestArray,
      };

      const button = render(
        <AddFriendButton
          friendData={userWithPendingFriendRequest}
          currentUserState={currentUserState}
        />,
      );

      const buttonText = button.queryByTestId('buttonText');

      if (!buttonText) {
        throw new Error('buttonText is undefined');
      }

      expect(buttonText.props.children).toBe('Cancel Friend Request');
    });
  });

  describe('if friend request status is rejected', () => {
    // If request has been rejected show unpressable button with 'Friendrequest rejected'
    it('should render an unpressable button with text "Friend Request Rejected"', () => {
      const friendRequest: IFriendRequest = {
        userId: currentUserState.userId,
        status: 'rejected',
      };

      const friendRequestArray = [friendRequest];

      const userWithPendingFriendRequest: IUser = {
        ...userWithoutFriends,
        friendRequests: friendRequestArray,
      };

      const button = render(
        <AddFriendButton
          friendData={userWithPendingFriendRequest}
          currentUserState={currentUserState}
        />,
      );

      const buttonText = button.queryByTestId('buttonText');

      if (!buttonText) {
        throw new Error('buttonText is undefined');
      }

      expect(buttonText.props.children).toBe('Friend Request Rejected');
    });
  });
});

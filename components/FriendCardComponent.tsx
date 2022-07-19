import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import { FriendsScreenProps } from '../types/NavigationTypes';

function FriendCardComponent({ friend, navigation }: FriendsScreenProps) {
  const { username, name, age, id } = friend;

  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.friendContainer, styles.pressed]
          : styles.friendContainer
      }
      onPress={() => {
        navigation.navigate('UserDetails', { userId: id });
      }}
    >
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{username}</Text>
      </View>
      <View style={styles.friendDetailsContainer}>
        <Text style={styles.detailsText}>{name}</Text>
        <Text style={styles.detailsText}>{age}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  friendContainer: {
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
  pressed: {
    opacity: 0.5,
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
  friendDetailsContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailsText: {
    color: colors.light,
    fontSize: fontSizes.small,
    marginBottom: 8,
  },
});

export default FriendCardComponent;

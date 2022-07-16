import { useState, useContext } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Pressable,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import StandardTextComponent from '../components/StandardTextComponent';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import IUser from '../types/userType';
import host from '../helpers/host';
import CurrentUserDetailsContext from '../context/UserContext';
import { CurrentUserDetailsContextType } from '../types/ContextTypes';
import { SearchScreenProps } from '../types/NavigationTypes';

function SearchScreen({ navigation }: SearchScreenProps) {
  const { currentUserState } = useContext(
    CurrentUserDetailsContext,
  ) as CurrentUserDetailsContextType;

  const [username, setUsername] = useState<string>('');
  const [friend, setFriend] = useState<IUser | null>(null);

  const getFriendDetails = async () => {
    try {
      const response = await fetch(`${host}/api/users/username/${username}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUserState.jwtToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFriend(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HeaderComponent title="Search" />
      <MainComponent>
        <KeyboardAvoidingView style={styles.keyboardAvoid}>
          <ScrollView
            style={styles.userContainer}
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="always"
          >
            <View style={styles.formContainer}>
              <StandardTextComponent text="Find a friend" />
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                placeholderTextColor={colors.light}
                value={username}
                onChangeText={(text) => {
                  setUsername(text);
                }}
              />
              <Pressable
                style={({ pressed }) =>
                  pressed ? [styles.button, styles.buttonPresed] : styles.button
                }
                onPress={() => {
                  getFriendDetails();
                  Keyboard.dismiss();
                }}
              >
                <Text style={styles.buttonText}>Search</Text>
              </Pressable>
            </View>

            {friend ? (
              <Pressable
                style={({ pressed }) =>
                  pressed
                    ? [styles.userCardContainer, styles.pressed]
                    : styles.userCardContainer
                }
                onPress={() => {
                  navigation.navigate('UserDetails', { userId: friend.id });
                }}
              >
                <View style={styles.headerTextContainer}>
                  <Text style={styles.headerText}>{friend.username}</Text>
                </View>
                <View style={styles.userDetailsContainer}>
                  <Text style={styles.detailsText}>{friend.name}</Text>
                  <Text style={styles.detailsText}>{friend.age}</Text>
                </View>
              </Pressable>
            ) : null}
          </ScrollView>
        </KeyboardAvoidingView>
      </MainComponent>
    </>
  );
}

const styles = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  userContainer: {
    width: '100%',
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
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
  userCardContainer: {
    alignItems: 'center',
    width: '75%',
    marginVertical: 16,
    paddingHorizontal: 8,
    paddingTop: 16,
    marginTop: 42,
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
});

export default SearchScreen;

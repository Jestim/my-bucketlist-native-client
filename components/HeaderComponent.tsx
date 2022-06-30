import { StyleSheet, View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import { screenWidth } from '../styles/shared';
import logout from '../helpers/logOut';
import UserDetailsContext from '../context/UserContext';
import { UserDetailsContextType } from '../types/ContextTypes';
import { getJWT } from '../helpers/secureStore';
import jwtSecureStoreKey from '../helpers/variables';

function HeaderComponent(props: { title: string }) {
  const { title } = props;

  const { userState, setUserState } = useContext(
    UserDetailsContext,
  ) as UserDetailsContextType;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
      {title === 'Profile' ? (
        <Pressable
          style={styles.logout}
          onPress={() => {
            logout(setUserState);
          }}
        >
          <MaterialIcons name="logout" size={36} color={colors.light} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    width: screenWidth,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  headerText: {
    color: colors.light,
    fontSize: fontSizes.large,
  },
  logout: {
    position: 'absolute',
    right: 18,
    top: 18,
  },
});

export default HeaderComponent;

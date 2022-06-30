import * as SecureStore from 'expo-secure-store';

export async function saveJWT(key: string, value: string): Promise<boolean> {
  try {
    await SecureStore.setItemAsync(key, value);
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
}

export async function getJWT(key: string): Promise<string | null> {
  try {
    const result = await SecureStore.getItemAsync(key);

    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

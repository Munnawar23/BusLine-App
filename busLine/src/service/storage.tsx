import {MMKV} from 'react-native-mmkv'

export const storage = new MMKV()

export const setAccessToken = (token: string) => {
    storage.set('accessToken', token);
};

export const getAccessToken = () => {
    return storage.getString('accessToken')
};

export const removeAccessToken = () => {
    storage.delete('accessToken')
};

export const setRefreshToken = (token: string) => {
    storage.set('refreshToken', token )
};
export const getRefreshToken = () => {
   return storage.getString('refreshToken')
};
export const removeRefreshToken = () => {
   storage.delete('refreshToken')
};
import { View, Image, Alert } from 'react-native'
import React, { useEffect } from 'react'
import {jwtDecode} from 'jwt-decode'
import { getAccessToken, getRefreshToken } from '../service/storage';
import { resetAndNavigate } from '../utils/NavigationUtils';
import { refresh_tokens } from '../service/requests/auth';

interface DecodedToken{
  exp: number;
}

const SplashScreen = () => {
  const tokenCheck=async () => {
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken() as string;

        if(accessToken){
          const decodeAccessToken = jwtDecode<DecodedToken>(accessToken)
          const decodedRefreshToken = jwtDecode<DecodedToken>(refreshToken)

          const currentTime = Date.now() / 1000; 

          if(decodedRefreshToken?.exp <currentTime){
            resetAndNavigate('LoginScreen');
            Alert.alert("Session Expired, please login again");
            return
          }

          if(decodeAccessToken?.exp < currentTime){
            const refreshed = await refresh_tokens();
            if(!refreshed){
              Alert.alert("There was an error")
              return
            }
          }

           resetAndNavigate('HomeScreen')
           return
        }
        resetAndNavigate('LoginScreen')
  }
  useEffect(() =>{
    const timeoutId = setTimeout(() =>{
      tokenCheck()
    },1500)
    return ()=> clearTimeout(timeoutId)
  })

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Image 
      source={require("../assets/images/logo_t.png")}
      className='h-[30%] w-[60%]'
      resizeMode='contain'
      />
    </View>
  )
}

export default SplashScreen
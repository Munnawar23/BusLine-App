import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useMutation } from '@tanstack/react-query';
import { loginWithGoogle } from '../service/requests/auth';
import { resetAndNavigate } from '../utils/NavigationUtils';

GoogleSignin.configure({
  webClientId:
    '251300616223-6dqhib6mna6ldmrc868asppasj9vde8g.apps.googleusercontent.com',
});

const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const loginMutation = useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: () => {
      resetAndNavigate('HomeScreen');
    },
    onError: error => {
      console.error('Login Failed');
    },
  });

  const handleGoogleSigning = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      loginMutation.mutate(response.data?.idToken as string);
    } catch (error) {
      console.error('Google signin error', error);
    }
  };

  return (
    <View>
      <Image
        source={require('../assets/images/cover.jpeg')}
        className="w-full h-64 bg-cover"
      />
      <View className="p-4">
        <Text className="font-okra font-bold text-2xl text-center">
          Create account or Sign in
        </Text>
        <View className="my-4 mt-12 border-1 gap-2 border border-black px-2 flex-row items-center">
          <Text className="font-okra w-[10%] font-bold text-base">+91</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            maxLength={10}
            keyboardType="number-pad"
            placeholder="Enter 10 digit phone number"
            className="font-okra h-11 w-[90%]"
          />
        </View>
        <TouchableOpacity
          onPress={handleGoogleSigning}
          className="bg-tertiary justify-center items-center p-3"
        >
          <Text className="text-white font-semibold font-okra">Lets go</Text>
        </TouchableOpacity>
        <Text className='text-center my-8 text-lg font-okra text-gray-700'>
           --------OR----------
        </Text>
        <View className='flex items-center justify-center flex-row gap-4'>
          <TouchableOpacity
          onPress={handleGoogleSigning}
          className='border border-1 border-gray-300 p-2'
          >
            <Image 
            source={require('../assets/images/google.png')}
            className='w-5 h-5 contain-size'
            />
          </TouchableOpacity>
          <TouchableOpacity
          className='border border-1 border-gray-300 p-2'
          >
            <Image 
            source={require('../assets/images/apple.png')}
            className='w-5 h-5 contain-size'
            />
          </TouchableOpacity>
        </View>

        <Text className='font-okra text-lg text-gray-500 font-medium text-center mt-10 w-72 self-center'>
          By Signing up you agree to our Terms and Conditions and Privacy Policy.
        </Text>

      </View>
    </View>
  );
};

export default LoginScreen;

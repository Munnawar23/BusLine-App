import React from 'react';
import { StatusBar} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './global.css';
import Navigation from './src/navigation/Navigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/service/queryClient';

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

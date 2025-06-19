import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { fetchBuses } from '../service/requests/bus';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { goBack, navigate } from '../utils/NavigationUtils';

const BusListScreen = () => {
  const route = useRoute();
  const params = route?.params as any;

  // 🚨 DEBUG: Log the params to see what's being passed
  console.log('=== BusListScreen Debug ===');
  console.log('Full params:', params);
  console.log('params.item:', params.item);
  console.log('params.item.date type:', typeof params.item?.date);
  console.log('params.item.date value:', params.item?.date);
  console.log('Is Date object?', params.item?.date instanceof Date);
  console.log('==========================');

  // Handle date as string (ISO format) for serialization
  const { from, to, date: dateParam } = params?.item || {};
  
  // Convert to string if it's a Date object (shouldn't happen but safety check)
  const dateString = dateParam instanceof Date ? dateParam.toISOString() : dateParam;
  
  // Convert string back to Date object for display and processing
  const date = dateString ? new Date(dateString) : new Date();

  const { data: buses, isLoading, error } = useQuery({
    queryKey: ['buses', from, to, dateString],
    queryFn: () => fetchBuses(from, to, dateString),
    enabled: !!from && !!to && !!dateString,
  });

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      className="bg-white mb-4 p-4 rounded-lg shadow-sm border border-gray-300"
      onPress={() =>
        navigate('SeatSelectionScreen', {
          busId: item?.busId,
          date: dateString, // pass string version of date
        })
      }
    >
      <Image
        className="h-6 w-8 mb-2"
        source={require('../assets/images/sidebus.png')}
      />
      <Text className="text-lg font-bold text-gray-900">{item.company}</Text>
      <Text className="text-base text-gray-600">{item.busType}</Text>

      <View className="flex-row justify-between mt-2">
        <Text className="text-lg font-semibold text-gray-700">
          {new Date(item.departureTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}{' '}
          -{' '}
          {new Date(item.arrivalTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
        </Text>

        <Text className="text-sm text-gray-500">{item.duration}</Text>
      </View>

      <View className="flex-row justify-between mt-2 items-center">
        <Text className="text-md text-green-600 font-bold">₹{item.price}</Text>
        <Text className="text-md text-green-600 line-through">
          ₹{item.originalPrice}
        </Text>
        <Text className="text-base text-gray-600">
          {item?.seats?.flat().filter((seat: any) => !seat.booked)?.length}{' '}
          Seats Available
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView />
      <View className="bg-white p-4 flex-row items-center border-b-[1px] border-teal-800">
        <TouchableOpacity onPress={goBack}>
          <ArrowLeftIcon size={24} color={'#000'} />
        </TouchableOpacity>
        <View className="ml-4">
          <Text className="text-lg font-bold">
            {from} ➡️ {to}
          </Text>
          <Text className="text-sm text-gray-500">{date.toDateString()}</Text>
        </View>
      </View>

      {isLoading && (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="teal" />
          <Text>Loading Buses....</Text>
        </View>
      )}

      {error && (
        <View className="flex-1 justify-center items-center">
          <Text className="text-red-500 font-bold">Failed to load buses.</Text>
        </View>
      )}

      {!error && !isLoading && buses?.length === 0 && (
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-500 font-bold">No Buses found.</Text>
        </View>
      )}

      <FlatList
        data={buses}
        keyExtractor={(item) => item.busId}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default BusListScreen;
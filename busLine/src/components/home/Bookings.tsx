import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { tabs } from '../../utils/dummyData';
import Search from './Search';
import { useQuery } from '@tanstack/react-query';
import { fetchUserTickets } from '../../service/requests/bus';
import { useFocusEffect } from '@react-navigation/native';
import BookItem from './BookItem';

const Bookings = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [refreshing, setRefreshing] = useState(false); // fixed typo

  const {
    data: tickets,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['userTickets'],
    queryFn: fetchUserTickets,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const filteredBookings =
    selectedTab === 'All'
      ? tickets
      : tickets?.filter((ticket: any) => ticket.status === selectedTab);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="teal" />
        <Text className="text-gray-500">Fetching Bookings...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-500">Failed to fetch bookings.</Text>
        <TouchableOpacity
          onPress={() => refetch()}
          className="mt-4 px-4 py-2 bg-blue-500 rounded"
        >
          <Text className="text-white font-semibold">Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 p-2 bg-white">
      <FlatList
        ListHeaderComponent={
          <>
            <Search />
            <Text className="text-2xl font-bold my-4">Past Bookings</Text>
            <View className="flex-row mb-4">
              {tabs?.map(tab => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setSelectedTab(tab)} // ✅ added this
                  className={`px-4 py-2 rounded-lg mx-1 ${
                    selectedTab === tab ? 'bg-red-500' : 'bg-gray-300'
                  }`}
                >
                  <Text
                    className={`text-sm font-bold ${
                      selectedTab === tab ? 'text-white' : 'text-black'
                    }`}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        }
        showsHorizontalScrollIndicator={false}
        data={filteredBookings}
        keyExtractor={item => item.id}
        nestedScrollEnabled
        ListEmptyComponent={
          <View className="items-center mt-6">
            <Text className="text-gray-500">No Bookings Found</Text>
          </View>
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => <BookItem item={item} />}
      />
    </View>
  );
};

export default Bookings;

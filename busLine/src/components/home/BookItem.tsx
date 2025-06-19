import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { UserGroupIcon } from 'react-native-heroicons/solid';
import TicketModal from '../ui/TicketModal';

const BookItem = ({ item }: any) => {
  const [ticketVisible, setTicketVisible] = useState(false);

  return (
    <View className="bg-gray-100 p-4 rounded-lg mb-3">
      <View className="flex-row justify-between">
        <Image
          source={require('../../assets/images/sidebus.png')}
          className="h-6 w-8"
        />
        <Text className="text-gray-500">{item?.status}</Text>
      </View>

      <Text className="text-lg font-bold">
        {item?.bus?.from} → {item?.bus?.to}
      </Text>

      <Text className="text-gray-600">
        {new Date(item?.date)?.toDateString()}
      </Text>

      <Text className="text-gray-600">{item?.bus?.type}</Text>

      <View className="flex-row items-center mt-2">
        <UserGroupIcon size={18} color="gray" />
        <Text className="ml-2 text-gray-600">
          {item.seatNumbers?.toString()}
        </Text>
      </View>

      {item.status === 'Cancelled' && (
        <Text className="text-green-600 font-bold mt-2">Refund completed</Text>
      )}

      <TouchableOpacity
        onPress={() => setTicketVisible(true)}
        className="mt-2 bg-red-500 py-2 px-4 rounded-lg"
      >
        <Text className="text-white text-center font-bold">See Ticket</Text>
      </TouchableOpacity>
      {ticketVisible && (
      <TicketModal
        bookingInfo={{
          from: item?.bus?.from,
          to: item?.bus?.to,
          departureTime: new Date(item?.bus?.departureTime).toLocaleTimeString(
            [],
            {
              hour: '2-digit',
              minute: '2-digit',
            },
          ),
          arrivalTime: new Date(item?.bus?.arrivalTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          date: new Date(item?.bus?.departureTime).toDateString(),
          company: item?.bus?.company,
          busType: item?.bus?.busType,
          seats: item?.seatNumbers,
          ticketNumber: item?._id,
          pnr: item?.pnr,
          fare: item?.total_fare,
        }}
        onClose={() => {
          setTicketVisible(false);
        }}
        visible={ticketVisible}
      />
  )}
    </View>
  );
};

export default BookItem;

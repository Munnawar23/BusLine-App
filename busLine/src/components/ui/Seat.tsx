import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { FC } from 'react';
import BookedIcon from '../../assets/images/booked.jpg';
import AvailableIcon from '../../assets/images/available.jpg';
import SelectedIcon from '../../assets/images/selected.jpg';

interface seat_id {
  _id?: string;
  seat_id: number;
  booked: boolean;
  type: 'window' | 'side' | 'path';
}

const Seat: FC<{
  seats: seat_id[][];
  onSeatSelect: (seat_id: number) => void;
  selectedSeats: number[];
}> = ({ seats, onSeatSelect, selectedSeats }) => {
  return (
    <View className="mb-4 justify-between flex-row">
      {/* Seat Legend */}
      <View className="w-[30%] items-center bg-white rounded-2xl p-4">
        <Text className="font-okra font-bold text-lg mb-4">Seat Type</Text>

        <View className="items-center mb-4">
          <Image source={SelectedIcon} className="h-12 w-12 my-1" />
          <Text className="font-okra font-medium text-md mb-4">Selected</Text>
        </View>

        <View className="items-center mb-4">
          <Image source={AvailableIcon} className="h-12 w-12 my-1" />
          <Text className="font-okra font-medium text-md mb-4">Available</Text>
        </View>

        <View className="items-center mb-4">
          <Image source={BookedIcon} className="h-12 w-12 my-1" />
          <Text className="font-okra font-medium text-md mb-4">Booked</Text>
        </View>
      </View>

      {/* Seat Grid */}
      <View className="w-[65%] bg-white rounded-2xl p-4">
        <Image
          source={require('../../assets/images/wheel.png')}
          className="h-10 w-10 mb-4 self-end"
        />

        <View className="mt-2 w-full">
          {seats.map((row, rowIndex) => (
            <View
              key={`row-${rowIndex}`}
              className="flex-row w-full justify-between items-center"
            >
              {row.map((seat, colIndex) => {
                const uniqueKey = seat._id || `r${rowIndex}-c${colIndex}-s${seat.seat_id}`;

                if (seat.type === 'path') {
                  return <View key={uniqueKey} className="p-5 m-1" />;
                }

                const isSelected = selectedSeats.includes(seat.seat_id);
                const icon = isSelected
                  ? SelectedIcon
                  : seat.booked
                  ? BookedIcon
                  : AvailableIcon;

                return (
                  <TouchableOpacity
                    key={uniqueKey}
                    disabled={seat.booked}
                    onPress={() => onSeatSelect(seat.seat_id)}
                  >
                    <Image source={icon} className="h-12 w-12 my-1" />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Seat;

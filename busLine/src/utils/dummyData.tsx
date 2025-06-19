type Bus = {
  busId: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  availableSeats: number;
  price: number;
  originalPrice: number;
  company: string;
  busType: string;
  rating: number;
  totalReviews: number;
  badges: string[];
};

interface seat_id {
  seat_id: number;
  booked: boolean;
  type: 'window' | 'side' | 'path';
}

interface Seats {
  rowId: number;
  seats: seat_id[];
}

export const busBookings = [
  {
    id: '1',
    from: 'Prayagraj (Uttar Pradesh)',
    to: 'Lucknow',
    date: '09 Feb 2025, 16:00',
    type: 'Bus - UPSRTC',
    status: 'Cancelled',
    passengers: 3,
  },
  {
    id: '2',
    from: 'Lucknow',
    to: 'Prayagraj (Uttar Pradesh)',
    date: '08 Feb 2025, 20:30',
    type: 'Bus - UPSRTC',
    status: 'Cancelled',
    passengers: 3,
  },
  {
    id: '3',
    from: 'Delhi',
    to: 'Agra',
    date: '15 April 2025, 10:00',
    type: 'Bus - Private',
    status: 'Upcoming',
    passengers: 2,
  },
  {
    id: '4',
    from: 'Mumbai',
    to: 'Pune',
    date: '05 March 2025, 12:30',
    type: 'Bus - MSRTC',
    status: 'Completed',
    passengers: 1,
  },
];

export const tabs = ['All', 'Upcoming', 'Completed', 'Cancelled'];

export const busInfo = {
  busId: 'bus_001',
  departureTime: '20:00',
  arrivalTime: '05:30',
  duration: '9h 30m',
  availableSeats: 6,
  price: 949,
  originalPrice: 999,
  company: 'Sethi Yatra Company',
  busType: 'A/C Seater / Sleeper (2+1)',
  rating: 4.6,
  totalReviews: 846,
  badges: ['Highly rated by women', 'New Bus'],
};

export const locations = [
  'Lucknow',
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Jaipur',
  'Ahmedabad',
  'Indore',
  'Surat',
  'Nagpur',
  'Patna',
  'Bhopal',
  'Chandigarh',
  'Goa',
  'Visakhapatnam',
  'Guwahati',
  'Ranchi',
];

export const buses: Bus[] = [
  {
    busId: 'bus_001',
    departureTime: '20:00',
    arrivalTime: '05:30',
    duration: '9h 30m',
    availableSeats: 6,
    price: 949,
    originalPrice: 999,
    company: 'Sethi Yatra Company',
    busType: 'A/C Seater / Sleeper (2+1)',
    rating: 4.6,
    totalReviews: 846,
    badges: ['Highly rated by women', 'New Bus'],
  },
  {
    busId: 'bus_002',
    departureTime: '21:30',
    arrivalTime: '06:45',
    duration: '9h 15m',
    availableSeats: 11,
    price: 949,
    originalPrice: 999,
    company: 'Sethi Yatra Company',
    busType: 'A/C Sleeper (2+1)',
    rating: 4.6,
    totalReviews: 682,
    badges: ['Highly rated by women', '4 Women Traveling'],
  },
];

export const seats: Seats[] = [
  {
    rowId: 1,
    seats: [
      {
        seat_id: 1,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 2,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 3,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 4,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 2,
    seats: [
      {
        seat_id: 5,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 6,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 7,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 8,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 3,
    seats: [
      {
        seat_id: 9,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 10,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 11,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 12,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 4,
    seats: [
      {
        seat_id: 13,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 14,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 15,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 16,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 5,
    seats: [
      {
        seat_id: 17,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 18,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 19,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 20,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 6,
    seats: [
      {
        seat_id: 21,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 22,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 23,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 24,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 7,
    seats: [
      {
        seat_id: 25,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 26,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 27,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 28,
        type: 'side',
        booked: false,
      },
    ],
  },
];

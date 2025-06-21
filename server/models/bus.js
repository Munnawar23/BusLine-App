import mongoose, { Schema } from "mongoose";

const SeatSchema = new Schema(
  {
    seat_id: { type: Number, required: true },
    type: { type: String, enum: ["window", "side", "path"], required: true },
    booked: { type: Boolean, default: false },
  },
  { _id: true }
);

// Define Bus Schema
const BusSchema = new Schema({
  busId: { type: String, required: true, unique: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  duration: { type: String, required: true },
  availableSeats: { type: Number, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  company: { type: String, required: true },
  busType: { type: String, required: true },
  rating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  badges: [{ type: String }],
  seats: [[SeatSchema]], 
});

// Export model
const Bus = mongoose.model("Bus", BusSchema);
export default Bus;

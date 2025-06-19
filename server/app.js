import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config.js/connect.js';
import { PORT } from './config.js/config.js';
import userRoutes from "./routes/user.js"
import busRoutes from './routes/bus.js'
import ticketRoutes from './routes/ticket.js'
import { buildAdminJS } from './config.js/setup.js';

dotenv.config();

const app = express();


const corsOption = {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'] 
};

app.use(cors(corsOption));
app.use(express.json()); 

//Routes
app.use("/user", userRoutes)
app.use("/bus", busRoutes)
app.use("/ticket",ticketRoutes)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await buildAdminJS(app)
    app.listen(PORT, '0.0.0.0', () => { 
      console.log(`Server started on http://localhost:${PORT}/admin`);
    });
  } catch (error) {
    console.log("Error starting server -->", error);
  }
};

start();

import mongoose from "mongoose";

import express from "express";
import dotenv from "dotenv";
import { getProfile, saveProfile } from "./api/profiles";

import cors from "cors";
import bodyParser from "body-parser";
import { getCommunities, subscribeToCommunity } from "./api/communities";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/profile", getProfile);
app.post("/profile", saveProfile);

app.get("/communities", getCommunities);
app.post("/communities/subscribe", subscribeToCommunity);

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/?retryWrites=true&w=majority`
);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

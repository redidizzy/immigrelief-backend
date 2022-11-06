import mongoose from "mongoose";

const profile = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  interests: [{ value: String }],
});
export const Profile = mongoose.model("Profile", profile);

import mongoose from "mongoose";

const profile = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  interests: [{ value: String }],
  communities: [{ type: mongoose.Types.ObjectId, ref: "Community" }],
});
export const Profile = mongoose.model("Profile", profile);

import mongoose from "mongoose";

const profileCommunity = new mongoose.Schema({
  profile: { type: mongoose.Types.ObjectId, ref: "Profile" },
  community: { type: mongoose.Types.ObjectId, ref: "Community" },
});

export const ProfileCommunity = mongoose.model(
  "ProfileCommunity",
  profileCommunity
);

import mongoose from "mongoose";

const community = new mongoose.Schema({
  name: String,
  interests: [{ value: String }],
});
export const Community = mongoose.model("Community", community);

import { Response } from "express";
import { Community } from "../models/communities";
import { Profile } from "../models/profiles";
import { ProfileCommunity } from "../models/profiles_communities";
import { TypedRequestBody } from "../utils";

export const getCommunities = async (
  _req: TypedRequestBody<any>,
  res: Response
) => {
  const communities: any = await Community.find();

  res.send({
    status: 200,
    communities,
  });
};

export const subscribeToCommunity = async (
  req: TypedRequestBody<any>,
  res: Response
) => {
  const profile :any = await Profile.findOne({_id: req.body.profile_id})
  profile.communities.push(req.body.community_id)
  await profile.save();

  res.send({
    status: 200,
  });
};

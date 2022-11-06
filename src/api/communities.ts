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
  const community = await Community.findOne({ name: req.body.name });
  const profile = await Profile.findOne();
  ProfileCommunity.create({ community, profile });

  res.send({
    status: 200,
  });
};

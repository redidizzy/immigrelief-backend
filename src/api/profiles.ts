import { Response } from "express";
import { Profile } from "../models/profiles";
import { TypedRequestBody } from "../utils";

export const saveProfile = async (
  req: TypedRequestBody<any>,
  res: Response
) => {
  let profile: any = await Profile.findOne();
  if (!profile) {
    profile = new Profile(req.body);
  } else {
    profile.firstName = req.body.firstName;
    profile.lastName = req.body.lastName;
    profile.email = req.body.email;
    profile.interests = req.body.interests.map((interest: string) => ({
      value: interest,
    }));
  }
  await profile.save();
  res.send({
    status: 200,
  });
};

export const getProfile = async (
  _req: TypedRequestBody<any>,
  res: Response
) => {
  let profile: any = await Profile.findOne();

  res.send({
    status: 200,
    body: profile,
  });
};

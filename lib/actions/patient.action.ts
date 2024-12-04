"use server";

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";
import { string } from "zod";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    console.log(newUser);
    return parseStringify(newUser);
  } catch (err: any) {
    if (err && err?.code === 409) {
      const existingUser = await users.list([Query.equal("email", user.email)]);

      return existingUser?.users[0];
    }
  }
};

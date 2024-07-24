"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export async function fetchDbBlogs() {
  try {
    connectToDatabase();

    const user = await User.find({});

    return { user };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch blogs");
  }
}

export const postUserData = async (data: any) => {
  try {
    await connectToDatabase();

    await User.create({
      name: data.name,
      email: data.email,
      telegram: data.telegram,
      transection: data.transection,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to post user data");
  }
};

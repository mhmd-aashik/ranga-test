import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  network: string;
  email: string;
  telegram: string;
  transaction: string;
  joinedAt: Date;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  network: {
    type: String,
    default: "Solana Volume",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telegram: {
    type: String,
    required: true,
  },
  transaction: {
    type: String,
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model("User", UserSchema);

export default User;

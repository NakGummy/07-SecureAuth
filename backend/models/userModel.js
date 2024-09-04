import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,

      // Optional field
      required: true,
      unique: true,
    },

    password: {
      type: String,

      // Optional field
      required: true,
    },

    name: {
      type: String,

      // Optional field
      required: true,
    },

    lastLogin: {
      type: Date,
      default: Date.now,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("users", userSchema);

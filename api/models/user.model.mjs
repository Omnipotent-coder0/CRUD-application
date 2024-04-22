import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    password: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 20,
    },
    entries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entry",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

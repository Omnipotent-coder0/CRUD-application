import mongoose from "mongoose";

const entrySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
    },
    visibility: {
      type: mongoose.Schema.Types.Boolean,
      required: true,
    }
  },
  { timestamps: true }
);

export const Entry = mongoose.model("Entry", entrySchema);

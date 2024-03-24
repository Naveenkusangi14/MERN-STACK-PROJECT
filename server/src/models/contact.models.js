import mongoose from "mongoose";

const { Schema } = mongoose;

//contactSchema
const contactSchema = new Schema(
  {
    username: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true },
    message: { type: Schema.Types.String, required: true },
    phonenumber: { type: Schema.Types.String, required: true },

  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);

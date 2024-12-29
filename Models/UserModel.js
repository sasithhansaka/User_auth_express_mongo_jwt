import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    Full_name: {
      type: String,
      required: [true, "please enter Full name "],
    },
    email: {
      type: String,
      required: [true, "please enter email"],
    },
    address: {
      type: String,
      required: [true, "please enter address"],
    },
    password: {
      type: String,
      required: [true, "please enter password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;

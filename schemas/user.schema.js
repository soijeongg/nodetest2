import mongoose from "mongoose";

let newUser = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  pw: { type: String, required: true },
});

let User = mongoose.model("user", newUser)
export default User
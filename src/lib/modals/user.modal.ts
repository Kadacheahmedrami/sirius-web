import { Schema, model, models } from "mongoose";
import { Arapey } from "next/font/google";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  
    items: {
      type : Array ,
      default : [0,0,0,0,0,0]
    }
  ,  
   foundImage: {
    type : String ,
    default : ""
  }
  
});

const User = models?.User || model("User", UserSchema);

export default User;

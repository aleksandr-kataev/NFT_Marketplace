import mongoose, { Schema, Document } from "mongoose"
import { MONGO_USER_INFO_COLLECTION } from "../../config"

export interface IUser extends Document {
    _id?: number
    user_address: string
    username: string
}

const UserSchema: Schema = new mongoose.Schema({
    user_address: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
})

export default mongoose.model<IUser>("User", UserSchema, MONGO_USER_INFO_COLLECTION)
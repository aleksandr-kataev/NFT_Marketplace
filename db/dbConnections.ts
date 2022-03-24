import mongoose from "mongoose"
import { MONGO_USER_DB_CONN_STRING, MONGO_TRANSACTION_DB_CONN_STRING } from "../config"

export const connectToUsersDB = async (): Promise<void> => {
    await mongoose
        .connect(MONGO_USER_DB_CONN_STRING as string)
        .catch(err => console.log(err))
    console.log("Users DB connection established")

}

export const connectToTransactionsDB = async (): Promise<void> => {
    await mongoose
        .connect(MONGO_TRANSACTION_DB_CONN_STRING as string)
        .catch(err => console.log(err))
    console.log("Transaction DB connection established")

}


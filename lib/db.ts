import mongoose from "mongoose";

export const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL as string);

        console.log("Successfully Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
};

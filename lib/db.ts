import mongoose from "mongoose";

export const connectToMongo = async () => {
    try {
        console.log("Connecting to MongoDB. Please Wait!");
        await mongoose.connect(process.env.DATABASE_URL as string);

        console.log("Successfully Connected to MongoDB");
    } catch (error) {
        console.log("An error occured");
        console.error(error);
    }
};

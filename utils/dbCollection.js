import mongoose from "mongoose"

const connectionDB = async () => {
    try {
        const mongoDB_URL = process.env.MongoDBURL
        await mongoose.connect(`${mongoDB_URL}`)
        console.log("✅ MongoDB connected successfully");
    } 
    catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1)        
    }
}

export default connectionDB
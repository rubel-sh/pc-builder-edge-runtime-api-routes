import { MongoClient } from "mongodb";

const clientPromise = MongoClient.connect(process.env.MONGODB_URI);

export async function getDb() {
    try {
        const client = await clientPromise;
        return client.db("pc-builder-next13");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

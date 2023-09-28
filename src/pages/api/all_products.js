import { getDb } from "@/lib/mongodb";
import { sendResponse } from "@/lib/server_utils";

export default async function handler(req, res) {
    try {
        const db = await getDb();
        const all_products = await db.collection("all_products").find({}).toArray();
        return sendResponse(res, 200, true, all_products);
    } catch (err) {
        return sendResponse(res, 500, false, [], err.message);
    }
}

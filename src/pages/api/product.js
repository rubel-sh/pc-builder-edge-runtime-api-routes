import { getDb } from "@/lib/mongodb";
import { sendResponse } from "@/lib/server_utils";

export default async function handler(req, res) {
    const db = await getDb();
    const component_unique_name = req.query.unique_name;

    if (component_unique_name) {
        const single_product_data = await db
            .collection("all_products")
            .find({ component_unique_url: component_unique_name })
            .toArray();
        return sendResponse(res, 200, true, single_product_data);
    } else {
        return sendResponse(res, 400, false, [], "Invalid Product Name");
    }
}

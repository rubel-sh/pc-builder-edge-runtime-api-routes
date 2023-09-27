import { getDb } from "@/lib/mongodb";
import { sendResponse } from "@/lib/server_utils";

export default async function handler(req, res) {
    const db = await getDb();
    const howMany = parseInt(req.query.limit) || 8;
    // get 10 random components from the database
    const randomComponents = await db
        .collection("all_products")
        .aggregate([{ $sample: { size: howMany } }])
        .project({
            component_type: 1,
            component_brand: 1,
            component_model: 1,
            component_price: 1,
            component_stock: 1,
            component_reviews: 1,
            component_discount: 1,
            component_sales: 1,
            component_rating: 1,
            component_image: 1,
            component_description: 1,
            component_unique_url: 1,
            component_category: 1,
            component_subcategory: 1,
        })
        .toArray();
    return sendResponse(res, 200, true, randomComponents);
}

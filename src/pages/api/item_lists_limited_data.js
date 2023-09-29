import { getDb } from "@/lib/mongodb";
import { sendResponse, verifyComponentType } from "@/lib/server_utils";

export default async function handler(req, res) {
    const db = await getDb();
    const { component } = req.query;
    const isValidComponent = verifyComponentType(component);
    if (isValidComponent) {
        const all_cpus = await db
            .collection("all_products")
            .find({ component_type: component })
            .project({
                component_type: 1,
                component_model: 1,
                component_brand: 1,
                component_price: 1,
                component_discount: 1,
                component_unique_url: 1,
                component_image: 1,
                component_rating: 1,
                key_features: 1,
            })
            .toArray();
        return sendResponse(res, 200, true, all_cpus);
    }

    return res.status(400).json({ message: "Invalid Component Type" });
}

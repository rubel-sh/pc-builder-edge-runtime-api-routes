import { getDb } from "@/lib/mongodb";
import { sendResponse, verifyComponentType } from "@/lib/server_utils";

export default async function handler(req, res) {
    const db = await getDb();

    const component_type = req.query.component_type;
    const isValidComponent = verifyComponentType(component_type);

    if (isValidComponent) {
        const selected_component_lists = await db
            .collection("all_products")
            .find({ component_type: component_type })
            .toArray();
        return sendResponse(res, 200, true, selected_component_lists);
    } else {
        return sendResponse(res, 400, false, [], "Invalid Component Type");
    }
}

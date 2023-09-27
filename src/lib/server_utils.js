import COMPONENT_TYPE from "./constants";
export function verifyComponentType(component_type) {
    const components_type = Object.values(COMPONENT_TYPE);
    if (components_type.includes(component_type)) {
        return true;
    } else {
        return false;
    }
}

export const sendResponse = (res, statusCode, success, data = [], message = "Successfully Fetched") => {
    const responseData = {
        statusCode: statusCode,
        message: message,
        success: success,
        data: data,
    };

    res.status(statusCode).json(responseData);
};

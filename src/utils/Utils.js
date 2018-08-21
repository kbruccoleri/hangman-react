/**
 * Creates a deep copy of an object.
 * @param obj
 */

class Utils {
    static deepCopy(obj) {
        return JSON.parse(JSON.stringify(obj));
    };
}

export default Utils;
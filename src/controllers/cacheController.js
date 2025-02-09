import cache from "../utils/cache.js";
// Store Key-Value Pair
export const storeCache = (req, res, next) => {
    try {
        const { key, value } = req.body;
        if (!key || !value) {
            throw { status: 400, message: "Key and value are required" };
        }

        if (cache.has(key)) {
            throw { status: 400, message: "Key already exists" };
        }

        if (cache.size >= 10) {
            throw { status: 403, message: "Cache limit reached" };
        }

        cache.set(key, value);
        res.status(201).json({ message: "Stored successfully" });
    } catch (error) {
        next(error);
    }
};

// Retrieve Value
export const getCache = (req, res, next) => {
    try {
        const value = cache.get(req.params.key);
        if (!value) {
            throw { status: 404, message: "Key not found" };
        }

        res.json({ key: req.params.key, value });
    } catch (error) {
        next(error);
    }
};

// Delete Key
export const deleteCache = (req, res, next) => {
    try {
        if (!cache.has(req.params.key)) {
            throw { status: 404, message: "Key not found" };
        }

        cache.delete(req.params.key);
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        next(error);
    }
};

import express from "express";
import { storeCache, getCache, deleteCache } from "../controllers/cacheController.js";

const router = express.Router();

router.post("/", storeCache);
router.get("/:key", getCache);
router.delete("/:key", deleteCache);

export default router;

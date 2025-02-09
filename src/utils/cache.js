import { LRUCache } from "lru-cache";

const cache = new LRUCache({
    max: 10,
});

export default cache;


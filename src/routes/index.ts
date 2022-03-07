import Router from "../utilities/router";
import kv from "./kv";

const router = new Router();

globalThis.ep = {
    "kv": "/kv"
};

router.use(globalThis.ep.kv, kv);

export default router;
import { createServer } from "https";
import { handle } from "./routes.js";

export default () => createServer(handle);

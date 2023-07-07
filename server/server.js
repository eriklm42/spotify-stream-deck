import { createServer } from "https";
import { handler } from "./routes.js";

export default () => createServer(handler);

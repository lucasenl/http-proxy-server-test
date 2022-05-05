import process from "process";
import { listening_port } from "./listening_port.ts";

import { start } from "./start.ts";

process.on("unhandledRejection", (e) => {
    console.error(e);
});

await start(listening_port);
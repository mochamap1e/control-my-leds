import { Elysia } from "elysia";

import controller from "./controller";

const app = new Elysia()
    .use(controller)
    .listen(5070);

console.log("Elysia backend running on port", app.server?.port);

export type App = typeof app;
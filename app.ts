// Import oak from deno online repo
import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";

// Create New APP

const app = new Application();

// Env Variables
const env = Deno.env.toObject();
const HOST = env.HOST || "localhost";
const PORT = env.PORT || 3000;

// Middlewares
app.use(router.routes());
app.use(router.allowedMethods());

// https://emojipedia.org/beating-heart/
console.log(`Beating 💓 on PORT: ${PORT}`);
await app.listen(`${HOST}:${PORT}`);

// TO RUN THE SERVER USE THIS COMMAND LINE, TO RUN THE APP YOU NEED TO GRANT THE PERMISSIONS
// deno run --allow-env --allow-net app.ts

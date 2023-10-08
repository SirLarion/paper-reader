import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { renderToReadableStream } from "react-dom/server";
import { createElement } from "react";

import { App } from "./react/App";

// bundle client side react-code
await Bun.build({
  entrypoints: ["./src/react/index.tsx"],
  outdir: "./public",
});

const app = new Elysia()
  .use(staticPlugin())
  .get("/", async () => {
    const app = createElement(App);

    const stream = await renderToReadableStream(app, {
      bootstrapScripts: ["/public/index.js"],
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  })
  .listen(3000);

console.log(`Server listening at http://localhost:${app.server?.port}`);

export type Server = typeof app;

import { Hono } from "hono";
import apiApp from "./api";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<div id="root" />);
});

app.route("/api", apiApp);

export default app;

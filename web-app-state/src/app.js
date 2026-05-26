import express from "express";
import path from "path";

import indexRoutes from "./routers/index.routes.js";
import stateRoutes from "./routers/state.routes.js";
import multiFormRoutes from "./routers/form.routes.js";
import statusRoutes from "./routers/status.routes.js";
import cookieParser from "cookie-parser";
import { visitorCount } from "./middleware/middleware.js";

const app = express();

app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(visitorCount);

app.use(indexRoutes);
app.use(stateRoutes);
app.use(multiFormRoutes);
app.use(statusRoutes);

export default app;
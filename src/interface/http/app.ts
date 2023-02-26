import express from "express";
import { router } from "./router";

import { container } from "../../container";
import { errorHandler } from "./errorHandler";

const makeApp = () => {
	const app = express();

	app.use((req, _, next) => {
		req.container = container;
		next();
	});
	app.use(express.json());
	app.use(router());

	app.use(errorHandler);

	return app;
};

export { makeApp };

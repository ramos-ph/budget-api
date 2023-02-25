import express, { Request } from "express";
import { router } from "./router";

const makeApp = ({ container }: { container: Request["container"] }) => {
	const app = express();

	app.use((req, _, next) => {
		req.container = container;
		next();
	});
	app.use(express.json());
	app.use(router());

	return app;
};

export { makeApp };

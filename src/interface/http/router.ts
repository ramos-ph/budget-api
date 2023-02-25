import { Router } from "express";
import { categoriesController } from "./categoriesController";

export const router = () => {
	const router = Router();

	router.use("/categories", categoriesController());

	return router;
};

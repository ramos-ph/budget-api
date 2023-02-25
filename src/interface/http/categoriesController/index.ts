import { Router } from "express";

import { createCategoryHandler } from "./createCategoryHandler";
import { listCategoriesHandler } from "./listCategoriesHandler";

export const categoriesController = () => {
	const router = Router();

	router.get("/", listCategoriesHandler);
	router.post("/", createCategoryHandler);

	return router;
};

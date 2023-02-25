import { RequestHandler } from "express";

import { makeListCategories } from "../../../application/categories/use-cases/ListCategories";
import { categoryRepository } from "../../../infrastructure/database/InMemoryCategoryRepository";

export const listCategoriesHandler: RequestHandler = async (req, res) => {
	const listCategories = makeListCategories({ categoryRepository });

	const categories = await listCategories();

	return res.status(200).send(categories);
};

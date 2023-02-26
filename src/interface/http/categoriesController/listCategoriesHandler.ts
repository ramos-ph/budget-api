import { RequestHandler } from "express";

import { makeListCategories } from "../../../application/categories/use-cases/ListCategories";

export const listCategoriesHandler: RequestHandler = async (req, res) => {
	const listCategories = makeListCategories(req.container);

	const categories = await listCategories();

	return res.status(200).send(categories);
};

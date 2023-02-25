import { RequestHandler } from "express";

import { makeCreateCategory } from "../../../application/categories/use-cases/CreateCategory";
import { categoryRepository } from "../../../infrastructure/database/InMemoryCategoryRepository";

export const createCategoryHandler: RequestHandler = async (req, res) => {
	const { name, description, monthly_limit } = req.body;

	const createCategory = makeCreateCategory({ categoryRepository });

	try {
		const categories = await createCategory({
			name,
			description,
			monthly_limit,
		});
		return res.status(201).send(categories);
	} catch (err) {
		return res.status(422).send({ message: err.message });
	}
};

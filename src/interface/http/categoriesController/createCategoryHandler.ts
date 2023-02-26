import { RequestHandler } from "express";

import { makeCreateCategory } from "../../../application/categories/use-cases/CreateCategory";

export const createCategoryHandler: RequestHandler = async (req, res) => {
	const { name, description, monthly_limit } = req.body;

	const createCategory = makeCreateCategory(req.container);

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

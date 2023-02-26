import { RequestHandler } from "express";
import { z } from "zod";

import { makeCreateCategory } from "../../../application/categories/use-cases/CreateCategory";

const schema = z
	.object({
		name: z
			.string({ required_error: "Cannot be empty" })
			.min(1, "Cannot be empty"),
		description: z.string().optional(),
		monthly_limit: z
			.number({
				required_error: "Cannot be empty",
			})
			.positive("Must be a positive integer")
			.int("Must be a positive integer"),
	})
	.required({ name: true, monthly_limit: true });

export const createCategoryHandler: RequestHandler = async (req, res, next) => {
	const createCategory = makeCreateCategory(req.container);

	try {
		const category = schema.parse(req.body);
		const categories = await createCategory(category);
		return res.status(201).send(categories);
	} catch (err) {
		return next(err);
	}
};

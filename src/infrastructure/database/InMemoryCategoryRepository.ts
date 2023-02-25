import crypto from "crypto";

import { CategoryCollection } from "../../domain/category/Category";
import { CategoryRepository } from "../../domain/category/CategoryRepository";

export const makeCategoryRepository = (): CategoryRepository => {
	const categories: CategoryCollection = [];

	return {
		getNextId() {
			return crypto.randomUUID();
		},

		async store(category) {
			categories.push(category);
		},

		async list() {
			return categories;
		},
	};
};

export const categoryRepository = makeCategoryRepository();

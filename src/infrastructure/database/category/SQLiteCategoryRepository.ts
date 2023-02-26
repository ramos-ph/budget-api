import crypto from "crypto";

import knex from "../knex";

import { CategoryRepository } from "../../../domain/category/CategoryRepository";
import { Category } from "../../../domain/category/Category";

export const makeCategoryRepository = (): CategoryRepository => {
	return {
		getNextId() {
			return crypto.randomUUID();
		},

		async store(category) {
			await knex("category").insert(category);
		},

		async list() {
			return knex<Category>("category").select("*");
		},
	};
};

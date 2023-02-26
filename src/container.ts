import * as SQLiteCategoryRepository from "./infrastructure/database/category/SQLiteCategoryRepository";
import * as InMemoryCategoryRepository from "./infrastructure/database/category/InMemoryCategoryRepository";

const categoryRepository =
	process.env.NODE_ENV === "test"
		? InMemoryCategoryRepository.makeCategoryRepository()
		: SQLiteCategoryRepository.makeCategoryRepository();

const container = {
	categoryRepository,
};

type Container = typeof container;

export { container };
export type { Container };

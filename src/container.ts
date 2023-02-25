import { makeCategoryRepository } from "./infrastructure/database/InMemoryCategoryRepository";

const categoryRepository = makeCategoryRepository();

const container = {
	categoryRepository,
};

type Container = typeof container;

export { container };
export type { Container };

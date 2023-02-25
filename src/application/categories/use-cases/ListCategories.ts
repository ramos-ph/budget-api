import { CategoryRepository } from "../../../domain/category/CategoryRepository";

type Dependencies = {
	categoryRepository: CategoryRepository;
};

const makeListCategories =
	({ categoryRepository }: Dependencies) =>
	async () => {
		const categories = await categoryRepository.list();

		return categories;
	};

export { makeListCategories };

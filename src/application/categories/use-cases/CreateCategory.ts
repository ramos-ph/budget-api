import * as Category from "../../../domain/category/Category";
import { CategoryRepository } from "../../../domain/category/CategoryRepository";

type Dependencies = {
	categoryRepository: CategoryRepository;
};

export type CreateCategoryProps = {
	name: string;
	description?: string;
	monthly_limit: number;
};

const makeCreateCategory =
	({ categoryRepository }: Dependencies) =>
	async (props: CreateCategoryProps) => {
		if (props.monthly_limit < 1) {
			throw new Error("Monthly limit should be greater than 1");
		}

		const category = Category.create({
			id: categoryRepository.getNextId(),
			...props,
		});

		await categoryRepository.store(category);

		return category;
	};

export { makeCreateCategory };

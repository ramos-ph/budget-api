import { expect } from "chai";
import { CategoryCollection } from "../../../../domain/category/Category";
import { CategoryRepository } from "../../../../domain/category/CategoryRepository";

import { makeCategoryRepository } from "../../../../infrastructure/database/InMemoryCategoryRepository";
import { makeListCategories } from "../ListCategories";

describe("List Categories Use Case", () => {
	let categoryRepository: CategoryRepository;
	let listCategories: () => Promise<CategoryCollection>;

	beforeEach(() => {
		categoryRepository = makeCategoryRepository();
		listCategories = makeListCategories({ categoryRepository });
	});

	describe("when there are NO categories stored", () => {
		it("returns an empty collection of categories", async () => {
			const categories = await listCategories();

			expect(categories).to.have.lengthOf(0);
		});
	});

	describe("when there are categories stored", () => {
		it("returns a collection of categories", async () => {
			const category = {
				id: categoryRepository.getNextId(),
				name: "Leisure",
				monthly_limit: 800,
				date: new Date(),
			};

			await categoryRepository.store(category);

			const categories = await listCategories();

			expect(categories).to.have.lengthOf(1);
			expect(categories).to.include(category);
		});
	});
});

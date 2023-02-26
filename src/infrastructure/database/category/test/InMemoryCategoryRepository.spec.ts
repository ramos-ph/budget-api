import { expect } from "chai";

import { CategoryRepository } from "../../../../domain/category/CategoryRepository";
import { makeCategoryRepository } from "../InMemoryCategoryRepository";

describe("InMemoryCategoryRepository", () => {
	let categoryRepository: CategoryRepository;

	beforeEach(() => {
		categoryRepository = makeCategoryRepository();
	});

	describe(".getNextId", () => {
		it("returns an UUID v4", () => {
			const UUID_PATTERN = /^\w{8}(-.{4}){3}-\w{12}$/;

			const nextId = categoryRepository.getNextId();

			expect(nextId).to.match(UUID_PATTERN);
		});
	});

	describe(".store", () => {
		it("saves the category in memory", async () => {
			const category = {
				id: categoryRepository.getNextId(),
				name: "Leisure",
				monthly_limit: 800,
				date: new Date(),
			};

			await categoryRepository.store(category);

			const [storedCategory] = await categoryRepository.list();

			expect(category.id).to.eq(storedCategory.id);
		});
	});

	describe(".list", () => {
		describe("when there are NO stored categories", () => {
			it("returns an empty collection", async () => {
				const categories = await categoryRepository.list();

				expect(categories).to.have.lengthOf(0);
			});
		});

		describe("when there are stored categories", () => {
			it("returns a collection of categories", async () => {
				await categoryRepository.store({
					id: categoryRepository.getNextId(),
					name: "Leisure",
					monthly_limit: 800,
					date: new Date(),
				});

				const categories = await categoryRepository.list();

				expect(categories).to.have.lengthOf(1);
			});
		});
	});
});

import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";

import { Category } from "../../../../domain/category/Category";
import { CreateCategoryProps, makeCreateCategory } from "../CreateCategory";
import { makeCategoryRepository } from "../../../../infrastructure/database/InMemoryCategoryRepository";

chai.use(chaiAsPromised);

describe("Create Category Use Case", () => {
	let createCategory: (props: CreateCategoryProps) => Promise<Category>;

	beforeEach(() => {
		const categoryRepository = makeCategoryRepository();
		createCategory = makeCreateCategory({ categoryRepository });
	});

	describe("when monthly limit is less than 1", () => {
		it("throws an error", () => {
			return expect(
				createCategory({ name: "Leisure", monthly_limit: 0 })
			).to.be.rejectedWith("Monthly limit should be greater than 1");
		});
	});

	describe("when category is created successfully", () => {
		it("returns the newly created category", async () => {
			const category = await createCategory({
				name: "Leisure",
				monthly_limit: 800,
			});

			expect(category).not.to.be.null;
			expect(category).to.have.property("id");
		});
	});
});

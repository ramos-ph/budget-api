import { Category, CategoryCollection } from "./Category";

export interface CategoryRepository {
	getNextId(): string;
	list(): Promise<CategoryCollection>;
	store(category: Category): Promise<void>;
}

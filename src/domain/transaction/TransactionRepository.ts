import { Transaction, TransactionCollection } from "./Transaction";

export interface TransactionRepository {
	list(): Promise<TransactionCollection>;
	store(transaction: Transaction): Promise<void>;
	getById(id: string): Promise<Transaction>;
}

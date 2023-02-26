import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.alterTable("category", (table) => {
		table.date("date").notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.alterTable("category", (table) => {
		table.dropColumn("date");
	});
}

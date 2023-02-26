import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("category", (table) => {
		table.text("id").primary().notNullable();
		table.text("name").notNullable();
		table.text("description").nullable();
		table.integer("monthly_limit").notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable("category");
}

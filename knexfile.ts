import type { Knex } from "knex";
import path from "path";

const config: { [key: string]: Knex.Config } = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./budget.db",
		},
		migrations: {
			directory: path.resolve(
				__dirname,
				"src",
				"infrastructure",
				"database",
				"migrations"
			),
		},
		useNullAsDefault: true,
	},
};

export default config;

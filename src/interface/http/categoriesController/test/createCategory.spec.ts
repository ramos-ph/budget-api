import request from "supertest";
import { expect } from "chai";

import { makeApp } from "../../app";

describe("POST /categories", () => {
	let agent: request.SuperTest<request.Test>;

	beforeEach(() => {
		agent = request(makeApp());
	});

	describe("when input does NOT contain known fields", () => {
		it("responds with 422 and the error details", async () => {
			const response = await agent.post("/categories").send({ invalid: true });

			expect(response.status).to.equal(422);

			expect(response.body.details).to.include({
				name: "Cannot be empty",
				monthly_limit: "Cannot be empty",
			});
		});
	});

	describe("when input contains known fields but they are invalid", () => {
		it("responds with 422 and the error details", async () => {
			const response = await agent
				.post("/categories")
				.send({ name: "", monthly_limit: 0 });

			expect(response.status).to.equal(422);

			expect(response.body.details).to.include({
				name: "Cannot be empty",
				monthly_limit: "Must be a positive integer",
			});
		});
	});

	describe("when input is valid", () => {
		it("responds with the newly created category", async () => {
			const response = await agent
				.post("/categories")
				.send({ name: "Leisure", monthly_limit: 800 });

			expect(response.status).to.equal(201);
			expect(response.body).to.include({
				name: "Leisure",
				monthly_limit: 800,
			});
		});
	});
});

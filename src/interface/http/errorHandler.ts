import { ErrorRequestHandler } from "express";

import { ZodError } from "zod";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	if (err instanceof ZodError) {
		return res.status(422).send({
			message: "Validation failed",
			details: err.issues.reduce((stored, issue) => {
				const path = issue.path.join(".");
				stored[path] = issue.message;
				return stored;
			}, {} as { [key: string]: string }),
		});
	}

	return res.status(500).send({
		message: "Internal server error",
	});
};

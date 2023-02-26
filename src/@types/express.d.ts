declare namespace Express {
	interface Request {
		container?: import("../container").Container;
	}
}

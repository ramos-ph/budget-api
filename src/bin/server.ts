import { makeApp } from "../interface/http/app";
import { container } from "../container";

makeApp({ container }).listen(process.env.PORT || 8080);

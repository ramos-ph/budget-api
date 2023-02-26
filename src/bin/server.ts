import { makeApp } from "../interface/http/app";

makeApp().listen(process.env.PORT || 8080);

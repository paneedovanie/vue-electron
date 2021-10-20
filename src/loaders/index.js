import path from "path";
global.__root = path.join(__dirname, "../");

import databaseLoader from "./database";
global.db = databaseLoader();

import serviceLoader from "./service";
global.services = serviceLoader();

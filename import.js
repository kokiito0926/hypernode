#!/usr/bin/env node

import { fs, path, argv } from "zx";

import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("./hook.js", import.meta.url);

if (!argv._[0]) {
	process.exit(1);
}

const targetPath = path.resolve(process.cwd(), argv._[0]);
if (!fs.existsSync(targetPath)) {
	process.exit(1);
}

await import(pathToFileURL(targetPath).href);

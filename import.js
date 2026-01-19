#!/usr/bin/env zx

import { argv } from "zx";

import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("./hook.js", import.meta.url);

const targetPath = path.resolve(process.cwd(), argv._[1]);
await import(pathToFileURL(targetPath).href);
// await import(argv._[1]);

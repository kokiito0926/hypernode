#!/usr/bin/env zx

import { argv } from "zx";

import { register } from "node:module";
// import { pathToFileURL } from "node:url";

register("./hook.js", import.meta.url);

await import(argv._[1]);

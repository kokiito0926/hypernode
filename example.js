#!/usr/bin/env zx

// >> $ zx ./import.js ./example.js --message "Hello world!"

import { argv } from "zx";

import axios from "https://esm.sh/axios";
import { chunk } from "https://esm.sh/lodash";

console.log("Hello world!");

console.log(argv);
console.log(argv?.message);

console.log(axios);
console.log(chunk);
console.log(chunk([1, 2, 3, 4, 5, 6], 2));
process.exit(0);

#!/usr/bin/env node

// >> $ node ./import.js ./example.js --message "Hello world!"

// import { argv } from "zx";
import { $, argv, minimist } from "https://esm.sh/zx";

import axios from "https://esm.sh/axios";
import { chunk } from "https://esm.sh/lodash";

// console.log("Hello world!");

console.log($);

console.log(argv);
console.log(argv?.message);

const args2 = minimist(process.argv.slice(2));
console.log(args2);
console.log(args2?.message);

// console.log(axios);
console.log(axios?.get);

console.log(chunk);
console.log(chunk([1, 2, 3, 4, 5, 6], 2));

process.exit(0);

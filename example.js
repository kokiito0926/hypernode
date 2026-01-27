#!/usr/bin/env node

// >> $ node ./index.js ./example.js --message "Hello world!"

import axios from "https://esm.sh/axios";
import { chunk } from "https://esm.sh/lodash";
import { $, argv, minimist } from "https://esm.sh/zx";

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

## ハイパーノード（Hyper Node）

ハイパーノード（Hyper Node）は、Node.jsのカスタムローダーです。  
HTTPS（[esm.sh](https://esm.sh/)など）で公開されている、ESMのモジュールを直接的にimportをすることができるようになります。  
[zx](https://github.com/google/zx)と組み合わせたりして、短いスクリプトを書いたりするときに便利かもしれません。

```javascript
import axios from "https://esm.sh/axios";
import { chunk } from "https://esm.sh/lodash";

console.log(axios?.get);
console.log(chunk([1, 2, 3, 4, 5, 6], 2));
```

## インストール

```bash
$ npm install --global @kokiito0926/hypernode
```

## 実行方法

```bash
$ hypernode ./example.js
```

## 未分類

```bash
$ node ./import.js ./example.js --message "Hello world!"
```

## ライセンス

[MIT](LICENSE)

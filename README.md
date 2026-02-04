# hypernode

hypernodeは、Node.jsでHTTPSのモジュールをimportに記述可能なカスタムローダーです。  
[Deno](https://deno.com/)やウェブブラウザのように、HTTPS（[esm.sh](https://esm.sh/)など）で公開されているモジュールをimportに記述することができるようになります。

## インストール

```bash
$ npm install --global @kokiito0926/hypernode
```

## 使用方法

まずはJavaScriptのファイルを作成します。  
それから、HTTPSのモジュールをimportに記述します。

```javascript
import axios from "https://esm.sh/axios";
import { chunk } from "https://esm.sh/lodash";
import { argv, minimist } from "https://esm.sh/zx";

const args = minimist(process.argv.slice(2));
console.log(args?.message);

const axiosResult = await axios?.get("https://example.com/");
console.log(axiosResult?.data);

const chunked = chunk([1, 2, 3, 4, 5, 6], 2);
console.log(chunked);
```

JavaScriptのファイルを指定して、hypernodeのコマンドを実行します。  
そうすると、importに記述されたHTTPSのモジュールが自動的に読み込まれます。

```bash
$ hypernode ./example.js --message "Hello world!"
```

## ライセンス

[MIT](LICENSE)

kuromoji-es
===========

JavaScript ES module implementation of Japanese morphological analyzer.
This is a pure JavaScript porting of [Kuromoji](https://www.atilika.com/ja/kuromoji/).

You can see how kuromoji.js works in [demo site](https://takuyaa.github.io/kuromoji.js/demo/tokenize.html).


Directory
---------

Directory tree is as follows:

    dict/         -- Dictionaries for tokenizer (gzipped)
    example/      -- Examples to use in Deno and Browsers
    src/          -- JavaScript source
    test/         -- Unit test (todo: remake for ES module version)


Usage
-----

```
import { kuromoji } from "https://code4fukui.github.io/kuromoji-es/kuromoji.js";

const tokenizer = await kuromoji.createTokenizer();
const path = tokenizer.tokenize("すもももももももものうち");
console.log(path);
```

API
---

The function tokenize() returns an JSON array like this:

    [ {
        word_id: 509800,          // 辞書内での単語ID
        word_type: 'KNOWN',       // 単語タイプ(辞書に登録されている単語ならKNOWN, 未知語ならUNKNOWN)
        word_position: 1,         // 単語の開始位置
        surface_form: '黒文字',    // 表層形
        pos: '名詞',               // 品詞
        pos_detail_1: '一般',      // 品詞細分類1
        pos_detail_2: '*',        // 品詞細分類2
        pos_detail_3: '*',        // 品詞細分類3
        conjugated_type: '*',     // 活用型
        conjugated_form: '*',     // 活用形
        basic_form: '黒文字',      // 基本形
        reading: 'クロモジ',       // 読み
        pronunciation: 'クロモジ'  // 発音
      } ]

(This is defined in src/util/IpadicFormatter.js)

See also [JSDoc page](https://takuyaa.github.io/kuromoji.js/jsdoc/) in details.

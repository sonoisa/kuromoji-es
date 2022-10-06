import { kuromoji as _kuromoji } from "./build/kuromoji.js";

//const DIC_URL = "https://code4fukui.github.io/kuromoji-es/dict/";
const DIC_URL = "../dict/";

export const kuromoji = {
  createTokenizer: async () => {
    return new Promise((resolve, reject) => {
      _kuromoji.builder({ dicPath: DIC_URL }).build((err, tokenizer) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokenizer);
      });
    });
  }
};

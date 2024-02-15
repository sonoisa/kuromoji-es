import { kuromoji as _kuromoji } from "./src/kuromoji.js";

const DIC_URL = "https://cdn.jsdelivr.net/gh/sonoisa/kuromoji-es@es/dict/";

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

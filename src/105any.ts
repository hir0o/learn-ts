import axios from "axios";

export {};
// 型が予想できないとき．
// jsをリプレイスするとき

// axios
// npm install --save-dev axios@0.19.2≈

let url: string = "https://udemy-utils.herokuapp.com/api/v1";

axios.get(url + "/articles?token=token123").then((res) => {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  const data: Article[] = res.data;
  console.log(data);
});

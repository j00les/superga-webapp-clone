const https = require("https");
const { JSDOM } = require("jsdom");

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

const url = "https://superga.id/products.json?limit=100&page=2";

// const prod = {
//   name,
//   slug,
//   description,
//   price,
//   mainImg,
//   categoryId,
//   authorId,
// };

fetch(url, {
  method: "get",
})
  .then(res => res.json())
  .then(data => {
    const prod = data.products.map(el => {
      // console.log(el.body_html.text);
      let doc = new JSDOM(el.body_html);
      const desc = doc.window.document.querySelector("p")?.textContent;
      // return doc.body;

      return {
        name: el.title,
        description: desc,
        mainImg: el.images[0].src,
      };

    });
    // console.log(prod);
  });

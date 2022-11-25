const https = require("https");
const { JSDOM } = require("jsdom");
const { formatSlug } = require("./helpers/helpers");

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

const url = "https://superga.id/products.json?limit=200&page=1";

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
    const prod = data.products
      .map(el => {
        let doc = new JSDOM(el.body_html);
        const desc = doc.window.document.querySelector("p")?.textContent;

        //Search Category
        let categoryId = null;
        for (let i = 0; i < el.tags.length; i++) {
          const cat = el.tags[i].toLowerCase();

          if (cat === "men") {
            categoryId = 1;
          } else if (cat === "women") {
            categoryId = 2;
          } else if (cat === "kids") {
            categoryId = 3;
          } else if (cat === "men" || cat === "women") {
            categoryId = 4;
          }
        }

        //Search Images
        const images = el.images.filter(image => {
          return image.product_id === el.id;
        });

        return {
          name: el.title,
          description: desc,
          mainImg: el.images[0]?.src,
          categoryId: categoryId,
          authorId: 1,
          images,
        };
      })
      .filter(el => {
        return el.description !== undefined && el.categoryId === 3;
      });

    // console.log(prod[0].images);
    console.log(JSON.stringify(prod));
  });

// const kids = ;

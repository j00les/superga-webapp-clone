// {
//   "id": 1,
//   "name": "2750 COTU CLASSIC 901",
//   "slug": "2750-COTU",
//   "description": "Our Classic Superga 2750 Cotu shoe is Fashion's trainer of choice. With an extra strong, fully breathable, pure upper, our timeless shape trainer is a lightweight, simple tennis shoe with our vulcanised sole. In production since 1911, this is the staple shoe with full versatility, and is the very definition of smart casual.",
//   "price": 600000,
//   "mainImg": "https://cdn.shopify.com/s/files/1/0421/7887/1458/products/02-2750-COTUCLASSIC-WHITE_52_300x300.jpg?v=1601291563",
//   "categoryId": 1,
//   "authorId": 1,
//   "Images": [
//     {
//       "id": 1,
//       "productId": 1,
//       "imgUrl": "https://cdn.shopify.com/s/files/1/0421/7887/1458/products/02-2750-COTUCLASSIC-WHITE_54_1024x1024@2x.jpg?v=1604550867",
//       "createdAt": "2022-12-10T06:41:18.412Z",
//       "updatedAt": "2022-12-10T06:41:18.412Z"
//     },
//     {
//       "id": 2,
//       "productId": 1,
//       "imgUrl": "https://cdn.shopify.com/s/files/1/0421/7887/1458/products/02-2750-COTUCLASSIC-WHITE_55_1024x1024@2x.jpg?v=1601346210",
//       "createdAt": "2022-12-10T06:41:18.412Z",
//       "updatedAt": "2022-12-10T06:41:18.412Z"
//     },
//     {
//       "id": 3,
//       "productId": 1,
//       "imgUrl": "https://cdn.shopify.com/s/files/1/0421/7887/1458/products/02-2750-COTUCLASSIC-WHITE_51.jpg?v=1604550867",
//       "createdAt": "2022-12-10T06:41:18.412Z",
//       "updatedAt": "2022-12-10T06:41:18.412Z"
//     }
//   ]
// },

interface Images {
  id: number;
  productId: number;
  imgUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  mainImg: string;
  categoryId: number;
  authorId: number;
  Images: Images[];
}

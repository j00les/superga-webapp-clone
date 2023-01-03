import { Product } from "../models/index";

export function toRupiah(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
}

export function filterProduct(product: Product[], categoryId: number) {
  const filteredData = product.filter((el) => {
    return el.categoryId === categoryId;
  });
  return filteredData;
}

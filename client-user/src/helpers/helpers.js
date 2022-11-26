  export function toRupiah(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  }

  export function filterProduct(product, categoryId) {
    const filteredData = product.filter(el => {
      return el.categoryId === categoryId
    })
    return filteredData
  }
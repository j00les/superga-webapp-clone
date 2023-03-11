interface Images {
  id: number
  productId: number
  imgUrl: string
  createdAt: string
  updatedAt: string
}

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  mainImg: string
  categoryId: number
  authorId: number
  Images: Images[]
}

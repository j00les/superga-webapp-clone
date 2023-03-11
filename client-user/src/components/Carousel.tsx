import { useEffect } from 'react'
import { Card } from './Card'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { fetchProducts } from 'store/actions/product'

export const Carousel: React.FC<{
  productCarousel?: boolean
  instagramCarousel?: boolean
}> = ({ productCarousel }) => {
  // console.log(products, "yeye");
  const { products } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (productCarousel != null) {
    return (
      <div className="mt-10">
        <h1 className="uppercase text-center text-2xl font-semibold">SHOP</h1>
        <div style={{ width: '75%' }} className=" mx-auto">
          <div className="mx-auto w-full mb-10 carousel carousel-center p-4 space-x-4 bg-white rounded-box">
            <Card isLandingPage={true} products={products.products} />
          </div>
        </div>
      </div>
    )
  } else {
    return <p>ig</p>
  }
}

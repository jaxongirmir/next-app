import { FC } from 'react'
import { Titillium_Web } from 'next/font/google'
import Layout from '@/components/Layout'
import { ICarData } from '@/components/interface/car.interface'
import CarItem from '@/components/ui/car/CarItem'

const titillium = Titillium_Web({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
})

const Home: FC<ICarData> = ({ cars }) => {
  return (
    <Layout title="Home" description="We love our car company">
      <h1 className={titillium.className}>Hello Jaxongir</h1>
      {cars.length ? (
        cars.map(car => <CarItem key={car.id} car={car} />)
      ) : (
        <div>Cars not found</div>
      )}
    </Layout>
  )
}

export default Home

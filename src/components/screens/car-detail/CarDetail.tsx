import Layout from '@/components/Layout'
import { ICarDataSingle } from '@/components/interface/car.interface'
import CarItem from '@/components/ui/car/CarItem'
import { FC } from 'react'

const CarDetail: FC<ICarDataSingle> = ({ car }) => {
  return (
    <Layout
      title={`${car.name} | car detail`}
      description="Good expensive car!"
    >
        <CarItem car={car}/>
    </Layout>
  )
}

export default CarDetail

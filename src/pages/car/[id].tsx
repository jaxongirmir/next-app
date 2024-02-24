import { ICarDataSingle } from '@/components/interface/car.interface'
import CarDetail from '@/components/screens/car-detail/CarDetail'
import { CarService } from '@/components/services/car.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

const CarPage: NextPage<ICarDataSingle> = ({ car }) => {
  return <CarDetail car={car} />
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const cars = await CarService.getAll()

  return {
    paths: cars.map(car => ({
      params: {
        id: car.id.toString(),
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({
  params,
}) => {
  const car = await CarService.getById(String(params?.id))
  return {
    props: { car },
    revalidate: 60,
  }
}

export default CarPage

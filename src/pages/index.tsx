import { ICarData } from '@/components/interface/car.interface'
import Home from '@/components/screens/home/Home'
import { CarService } from '@/components/services/car.service'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'

const HomePage: NextPage<ICarData> = ({ cars }) => {
  return <Home cars={cars} />
}


// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
export const getStaticProps: GetStaticProps<ICarData> = async () => {
  const cars = await CarService.getAll()
  return {
    props: { cars },
    revalidate: 60,
  }
}

export default HomePage

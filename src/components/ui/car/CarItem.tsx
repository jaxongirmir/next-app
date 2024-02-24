import { ICarDataSingle } from '@/components/interface/car.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './CarItem.module.scss'

const CarItem: FC<ICarDataSingle> = ({ car }) => {
  return (
    <div className={styles.item}>
      <Image src={car.image} alt={car.name} width={350} height={200} />
      <h2>{car.name}</h2>
      <small>{car.price}</small>
      <Link href={`/car/${car.id}`}>Read more</Link>
    </div>
  )
}

export default CarItem

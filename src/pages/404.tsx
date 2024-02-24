import { NextPage } from 'next'
import Layout from '@/components/Layout'
import Image from 'next/image'

const NotFound: NextPage = () => {
  return (
    <Layout title='404'>
      <div style={{
        textAlign: 'center'
      }}>
        {/* <img src="./404.png" alt="" width={400} height={330} /> */}
        <Image priority src="/404.png" alt="" width={400} height={330} />
      </div>
    </Layout>
  )
}

export default NotFound

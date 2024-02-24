import Layout from '@/components/Layout'
import { NextPageAuth } from '@/components/interface/page.interface'

const AboutPage: NextPageAuth = () => {
  return (
    <Layout title="About">
      <h2>About</h2>
    </Layout>
  )
}
AboutPage.isOnlyUser = true
export default AboutPage

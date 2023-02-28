import { Layout } from '@/components/layout/MainLayout'
import { Contact, ImageList } from '@/features/top/components'

export default function Top() {
  return (
    <Layout>
      <>
        <ImageList />
        <Contact />
      </>
    </Layout>
  )
}

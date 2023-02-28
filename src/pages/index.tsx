import { Container, VStack } from '@chakra-ui/react'
import { Layout } from '@/components/layout/MainLayout'
import { Contact, ImageList } from '@/features/top/components'

export default function Top() {
  return (
    <Layout>
      <>
        <Container maxW='800px' py={6}>
          <VStack spacing={6}>
            <ImageList />
            <Contact />
          </VStack>
        </Container>
      </>
    </Layout>
  )
}

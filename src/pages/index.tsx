import { Container, VStack } from '@chakra-ui/react'
import { Layout } from '@/components/layout/MainLayout'
import { Contact, KeyVisual } from '@/features/top/components'
import { Gallery } from '@/features/top/components/ImageList'

export default function Top() {
  return (
    <Layout>
      <>
        <KeyVisual />
        <Gallery />
        <Container maxW='800px' py={6}>
          <VStack spacing={6}>
            <Contact />
          </VStack>
        </Container>
      </>
    </Layout>
  )
}

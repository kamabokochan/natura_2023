import { Container, VStack, Text } from '@chakra-ui/react'
import { Heading } from '@/components/elements'
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
            <Heading as='h2' size='lg'>
              お問い合わせ
            </Heading>
            <Text fontSize='md'>
              撮影のご依頼やご相談、また、写真素材に関するお問い合わせは、どうぞお気軽にご連絡ください。
            </Text>
            <Contact />
          </VStack>
        </Container>
      </>
    </Layout>
  )
}

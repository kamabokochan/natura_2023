import { Container, VStack } from '@chakra-ui/react'
import styled from 'styled-components'
import { Layout } from '@/components/layout/MainLayout'
import { Contact, ImageList, KeyVisual } from '@/features/top/components'

export default function Top() {
  return (
    <Layout>
      <>
        <KeyVisual />
        <Container maxW='800px' py={6}>
          <VStack spacing={6}>
            {/* <ImageList /> */}
            <Contact />
          </VStack>
        </Container>
      </>
    </Layout>
  )
}

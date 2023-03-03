import { Container, VStack, Text, Button, Center } from '@chakra-ui/react'
import { RiInstagramLine, RiArrowRightSLine } from 'react-icons/ri'
import { Heading } from '@/components/elements'
import { Layout_PC } from '@/components/layout/MainLayout/index.pc'
import { Contact, KeyVisual_PC } from '@/features'
import { Gallery } from '@/features/ImageList'

export const TopView_PC = () => {
  return (
    <Layout_PC>
      <>
        <KeyVisual_PC />
        <VStack spacing={6}>
          <Container maxW='container.xl' py={6}>
            <Gallery />
            <Center py={6}>
              <Button
                as='a'
                href='https://www.instagram.com/photostudionatura/'
                target='_blank'
                colorScheme={'gray'}
                variant='outline'
                leftIcon={<RiInstagramLine />}
                rightIcon={<RiArrowRightSLine />}
              >
                もっと写真を見る
              </Button>
            </Center>
          </Container>

          <Container maxW='container.lg' py={6}>
            <Heading as='h2' size='lg'>
              お問い合わせ
            </Heading>
            <Text fontSize='md' pt={12} pb={4}>
              撮影のご依頼やご相談、また、写真素材に関するお問い合わせは、どうぞお気軽にご連絡ください。
            </Text>
            <Contact />
          </Container>
        </VStack>
      </>
    </Layout_PC>
  )
}

import { Text, Button, Box, Center } from '@chakra-ui/react'
import { RiInstagramLine, RiArrowRightSLine } from 'react-icons/ri'
import { Heading } from '@/components/elements'
import { Layout_SP } from '@/components/layout/MainLayout/index.sp'
import { Contact, KeyVisual_SP } from '@/features'
import { Gallery } from '@/features/ImageList'
import { Food_SP } from '@/features/ImageList/Food/index.sp'

export const TopView_SP = () => {
  return (
    <Layout_SP>
      <>
        <KeyVisual_SP />
        
        <Food_SP />

        <Box>
          {/* <Gallery /> */}
          <Center mt={'16px'}>
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
        </Box>

        <Box mt={'56px'} maxW={'xl'} mx={'auto'}>
          <Heading as='h2' size='lg'>
            お問い合わせ
          </Heading>
          <Text fontSize='md' mt={'16px'}>
            撮影のご依頼やご相談、また、写真素材に関するお問い合わせは、どうぞお気軽にご連絡ください。
          </Text>
          <Box mt={'24px'}>
            <Contact />
          </Box>
        </Box>
      </>
    </Layout_SP>
  )
}

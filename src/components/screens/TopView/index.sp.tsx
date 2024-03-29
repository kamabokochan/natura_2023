import { Text, Button, Box, Center } from '@chakra-ui/react'
import { RiInstagramLine, RiArrowRightSLine } from 'react-icons/ri'
import styled from 'styled-components'
import { Heading } from '@/components/elements'
import { Contact, KeyVisual_SP } from '@/features'
import { Event_SP } from '@/features/ImageList/Event/index.sp'
import { Food_SP } from '@/features/ImageList/Food/index.sp'

export const TopView_SP = () => {
  return (
    <Root>
      <KeyVisual_SP />

      <Box mt={'56px'}>
        <Heading as='h2' size='lg' fontFamily={'serif'}>
          料理
        </Heading>
        <Box mt={'12px'}>
          <Food_SP />
        </Box>
      </Box>

      <Box mt={'56px'}>
        <Heading as='h2' size='lg' fontFamily={'serif'}>
          祭り・催し物
        </Heading>
        <Box mt={'12px'}>
          <Event_SP />
        </Box>
      </Box>

      <Box>
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

      <Box mt={'56px'}>
        <Heading as='h2' size='lg' fontFamily={'serif'}>
          お問い合わせ
        </Heading>
        <Text fontSize='md' mt={'16px'}>
          撮影のご依頼やご相談、また、写真素材に関するお問い合わせは、どうぞお気軽にご連絡ください。
        </Text>
        <Box mt={'24px'}>
          <Contact />
        </Box>
      </Box>
    </Root>
  )
}

const Root = styled.div`
  padding: 70px 12px 40px;
`

import { Text, Button, Container, Box, Center } from '@chakra-ui/react'
import { RiInstagramLine, RiArrowRightSLine } from 'react-icons/ri'
import styled from 'styled-components'
import { Heading } from '@/components/elements'
import { Contact, KeyVisual_PC } from '@/features'
import { Event_PC } from '@/features/ImageList/Event/index.pc'
import { Food_PC } from '@/features/ImageList/Food/index.pc'

export const TopView_PC = () => {
  return (
    <Root>
      <KeyVisual_PC />

      <Box mt={'56px'} maxW={'1250px'} mx={'auto'}>
        <Heading as='h2' size='lg' fontFamily={'serif'}>
          料理
        </Heading>
        <Box mt={'12px'}>
          <Food_PC />
        </Box>
      </Box>

      <Box mt={'112px'} maxW={'1250px'} mx={'auto'}>
        <Heading as='h2' size='lg' fontFamily={'serif'}>
          祭り・催し物
        </Heading>
        <Box mt={'12px'}>
          <Event_PC />
        </Box>
      </Box>

      <Box>
        <Center mt={'60px'}>
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

      <Box mt={'112px'} maxW={'1250px'} mx={'auto'}>
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
  padding: 70px 60px 60px;
`

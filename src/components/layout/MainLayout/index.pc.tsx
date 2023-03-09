import 'tailwindcss/tailwind.css'
import { ChakraProvider } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import StyledComponentsRegistry from '@/lib/registry'

export const Layout_PC = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider>
      <StyledComponentsRegistry>
        <>
          <NextSeo
            title='東北・岩手の写真撮影 | フォトスタジオ NATURA（ナチューラ）'
            description='フォトスタジオ NATURA（ナチューラ）は、東北、主に岩手県を中心に活動しており、 広告や雑誌、出版物の取材撮影、人物や建築物、料理、スポーツなど幅広いジャンルの撮影を手がけています。 岩手県の美しい風景や文化、人々の温かさを写真を通じてお伝えします。'
            canonical='https://photostudionatura.vercel.app/'
            openGraph={{
              url: 'https://photostudionatura.vercel.app/',
              title: '東北・岩手の写真撮影 | フォトスタジオ NATURA（ナチューラ）',
              description:
                'フォトスタジオ NATURA（ナチューラ）は、東北、主に岩手県を中心に活動しており、 広告や雑誌、出版物の取材撮影、人物や建築物、料理、スポーツなど幅広いジャンルの撮影を手がけています。 岩手県の美しい風景や文化、人々の温かさを写真を通じてお伝えします。',
              images: [
                {
                  url: '/img/ogp/ogp.jpg',
                  width: 600,
                  height: 330,
                  alt: '東北・岩手の写真撮影 | フォトスタジオ NATURA（ナチューラ）',
                  type: 'image/jpeg',
                },
              ],
              siteName: 'フォトスタジオ NATURA（ナチューラ）',
            }}
            twitter={{
              site: '@photo_natura',
              cardType: 'summary_large_image',
            }}
          />
          <Header />
          <Main>{children}</Main>
          <Footer />
        </>
      </StyledComponentsRegistry>
    </ChakraProvider>
  )
}

const Main = styled.main`
  padding: 70px 60px 60px;
`

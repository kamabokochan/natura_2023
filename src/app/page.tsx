'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { TopView_PC } from '@/components/screens/TopView/index.pc'
import { TopView_SP } from '@/components/screens/TopView/index.sp'
import { useDeviceType } from '@/hooks/useDeviceType'
import StyledComponentsRegistry from '@/lib/registry'

export default function Home() {
  const { isPC, isSP } = useDeviceType()
  if (isPC || isSP) {
    return (
      <ChakraProvider>
        <StyledComponentsRegistry>
          <>
            <Header />
            <main>
              {isPC && <TopView_PC />}
              {isSP && <TopView_SP />}
            </main>
            <Footer />
          </>
        </StyledComponentsRegistry>
      </ChakraProvider>
    )
  }
  return <></>
}

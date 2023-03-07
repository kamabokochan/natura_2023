import 'tailwindcss/tailwind.css'
import { ChakraProvider } from '@chakra-ui/react'
import styled from 'styled-components'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

import StyledComponentsRegistry from '@/lib/registry'

export const Layout_SP = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider>
      <StyledComponentsRegistry>
        <>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </>
      </StyledComponentsRegistry>
    </ChakraProvider>
  )
}

const Main = styled.main`
  padding: 70px 12px 40px;
`

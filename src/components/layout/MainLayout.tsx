import 'tailwindcss/tailwind.css'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import StyledComponentsRegistry from '@/lib/registry'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <>
        <Header />
        {children}
        <Footer />
      </>
    </StyledComponentsRegistry>
  )
}

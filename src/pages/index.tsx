import styled from 'styled-components'
import { Layout } from '@/components/layout/MainLayout'

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

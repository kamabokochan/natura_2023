import { RiInstagramLine, RiTwitterFill } from 'react-icons/ri'
import styled from 'styled-components'
import { Logo } from '@/components/elements/Logo'

export const Header = () => {
  return (
    <HeaderRoot>
      <Logo />
      <SnsList>
        <a href='https://www.instagram.com/photostudionatura/' target='_blank' rel='noreferrer'>
          <RiInstagramLine size={24} />
        </a>
        {/* <RiTwitterFill size={24} className='ml-2' /> */}
      </SnsList>
    </HeaderRoot>
  )
}

const HeaderRoot = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`

const SnsList = styled.div`
  display: flex;
`

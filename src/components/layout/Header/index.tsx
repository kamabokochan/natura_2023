import { RiInstagramLine, RiTwitterFill } from 'react-icons/ri'
import styled from 'styled-components'
import { Logo } from '@/components/elements'

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
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`

const SnsList = styled.div`
  display: flex;
`

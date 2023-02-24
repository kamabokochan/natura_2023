import styled from 'styled-components'

export const Logo = () => {
  return (
    <Wrap>
      <LogoIcon xmlns='http://www.w3.org/2000/svg' width='50' viewBox='0 0 239 189'>
        <g>
          <path
            fill='#44733a'
            d='M171,189c5.9-9.8,4.7-20.9,5.7-31.6c3.8-40.5,19-76.2,44.7-107.4c3.9-4.8,9.2-8.1,15.5-9.4c-4.6,9.3-3.9,19.5-4.8,29.3
		c-2.5,26.5-9.1,51.9-22.3,75c-9.6,16.8-18.1,34.7-36.8,44C172.3,189,171.6,189,171,189z'
          ></path>
          <path
            fill='#5a955d'
            d='M104.3,0c2.1,5.7,5.5,10.4,10,14.6c32.7,30.4,53.1,67.6,61.2,111.6c0.9,5,0.9,10-0.5,14.8c-0.7,2.4-2.4,3.6-4.1,0.9
		c-6.1-9.3-14.9-16-22.1-24.3c-16.7-19.1-29.7-40.3-38.3-64.2c-3.3-9.1-5.8-18.4-8-27.8c-2-8.6-1.7-17.2,0.9-25.6
		C103.6,0,104,0,104.3,0z'
          ></path>
          <path
            fill='#8dc38d'
            d='M151.8,128.8c-16.1-2.9-31.4,1.3-47,0c-15.1-1.3-29.8-3.8-44.3-7.7c-8-2.2-15.6-5.4-23.1-8.9c-7.5-3.5-14.6-7.7-21.9-11.6
		C10.5,98,6.8,94,3.2,89.8c-0.6-0.7-1.5-1.5-0.9-2.6c0.4-0.8,1.4-0.8,2.2-0.6c10.5,3,21-0.4,31.5-0.2c19.4,0.2,38.4,2.2,57.1,8.3
		c12.3,4,24.4,8.3,35.8,14.4C137.6,113.7,146.6,118,151.8,128.8z'
          ></path>
        </g>
      </LogoIcon>
      <LogoTitle>
        PHOTO STUDIO
        <CoName>NATURA</CoName>
      </LogoTitle>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: end;
`

const LogoIcon = styled.svg`
  padding-right: 10px;
  display: inline-block;
`

const LogoTitle = styled.h1`
  margin-top: 3px;
  display: block;
  color: #847e41;
  font-size: 10px;
  font-weight: lighter;
  font-family: Quicksand, sans-serif;
`

const CoName = styled.span`
  display: block;
  color: #497f4b;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: Caudex, serif;
`

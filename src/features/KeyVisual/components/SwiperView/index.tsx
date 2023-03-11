import React from 'react'
import styled from 'styled-components'
import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'

export const SwiperView = () => {
  return (
    <SwiperRoot
      spaceBetween={30}
      effect={'fade'}
      modules={[Autoplay, EffectFade]}
      className='mySwiper'
      loop={true}
      allowTouchMove={false}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Img src='/img/keyVisual/image01.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <Img src='/img/keyVisual/image02.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <Img src='/img/keyVisual/image03.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <Img src='/img/keyVisual/image04.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <Img src='/img/keyVisual/image05.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <Img src='/img/keyVisual/image06.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <Img src='/img/keyVisual/image07.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <Img src='/img/keyVisual/image08.jpg' alt='' />
      </SwiperSlide>
    </SwiperRoot>
  )
}

const SwiperRoot = styled(Swiper)`
  width: 100%;
  height: auto;
`

const Img = styled.img`
  width: 100%;
  height: auto;
`

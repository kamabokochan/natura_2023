import React from 'react'
import styled from 'styled-components'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

export const Food_SP = () => {
  return (
    <div>
      <SwiperRoot
        navigation={true}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (_, className) => {
            return (
              '<span class="' +
              className +
              '" style="width: 6px; height: 6px; background-color: #699de5; margin: 0 2px;">' +
              '</span>'
            )
          },
        }}
        modules={[Pagination]}
        spaceBetween={30}
        loop={true}
      >
        <SwiperSlide>
          <Img src='/img/gallery/img7.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <Img src='/img/gallery/img8.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <Img src='/img/gallery/img9.jpg' alt='' />
        </SwiperSlide>
      </SwiperRoot>
      <CustomPagination className='swiper-pagination'></CustomPagination>
    </div>
  )
}

const SwiperRoot = styled(Swiper)`
  width: 100%;
  aspect-ratio: 6 / 4;
`

const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
const CustomPagination = styled.div`
  position: static;
`

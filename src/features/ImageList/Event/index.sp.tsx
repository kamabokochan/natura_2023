import React from 'react'
import styled from 'styled-components'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const eventImages = [
  {
    src: '/img/gallery/event/img1.jpg',
    alt: '盛岡さんさ踊り',
  },
  {
    src: '/img/gallery/event/img2.jpg',
    alt: 'チャグチャグ馬コ',
  },
  {
    src: '/img/gallery/event/img3.jpg',
    alt: '紫波夏祭り 神輿',
  },
  {
    src: '/img/gallery/event/img4.jpg',
    alt: '紫波夏祭り 花火',
  },
  {
    src: '/img/gallery/event/img5.jpg',
    alt: '花巻まつり',
  },
  {
    src: '/img/gallery/event/img6.jpg',
    alt: 'お祭り 射的',
  },
  {
    src: '/img/gallery/event/img7.jpg',
    alt: 'お祭り 屋台',
  },
  {
    src: '/img/gallery/event/img8.jpg',
    alt: 'チャグチャグ馬コ',
  },
  {
    src: '/img/gallery/event/img9.jpg',
    alt: '盛岡さんさ踊り',
  },
]

export const Event_SP = () => {
  return (
    <div>
      <SwiperRoot
        navigation={true}
        pagination={{
          el: '#event-pagination',
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
        {eventImages.map((img, index) => {
          return (
            <SwiperSlide key={`${img.alt}_${index}`}>
              <Img src={img.src} alt={img.alt} />
            </SwiperSlide>
          )
        })}
      </SwiperRoot>
      <CustomPagination id='event-pagination' className='swiper-pagination'></CustomPagination>
    </div>
  )
}

const SwiperRoot = styled(Swiper)`
  width: 100%;
  aspect-ratio: 6 / 4;
  background-color: #000;
`

const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
const CustomPagination = styled.div`
  position: static;
`

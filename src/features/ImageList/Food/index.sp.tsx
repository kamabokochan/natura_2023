import React from 'react'
import styled from 'styled-components'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const foodImages = [
  {
    src: '/img/gallery/food/img1.jpg',
    alt: 'わんこそば',
  },
  {
    src: '/img/gallery/food/img2.jpg',
    alt: '田沢湖 湖畔の杜ビール',
  },
  {
    src: '/img/gallery/food/img3.jpg',
    alt: '大同苑 盛岡冷麺',
  },
  {
    src: '/img/gallery/food/img4.jpg',
    alt: 'ローストビーフ',
  },
  {
    src: '/img/gallery/food/img5.jpg',
    alt: 'あら汁',
  },
  {
    src: '/img/gallery/food/img6.jpg',
    alt: '料理',
  },
  {
    src: '/img/gallery/food/img7.jpg',
    alt: '松茸',
  },
  {
    src: '/img/gallery/food/img8.jpg',
    alt: '羊羹',
  },
  {
    src: '/img/gallery/food/img9.jpg',
    alt: 'ジンギスカン',
  },
]

export const Food_SP = () => {
  return (
    <div>
      <SwiperRoot
        navigation={true}
        pagination={{
          el: '#food-pagination',
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
        {foodImages.map((img) => {
          return (
            <SwiperSlide key={img.alt}>
              <Img src={img.src} alt={img.alt} />
            </SwiperSlide>
          )
        })}
      </SwiperRoot>
      <CustomPagination id='food-pagination' className='swiper-pagination'></CustomPagination>
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

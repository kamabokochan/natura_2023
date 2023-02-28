import styled from 'styled-components'

export const ImageList = () => {
  return (
    <div>
      <div className='flex h-60'>
        <div className='w-2/4'>
          <Img
            src='https://natura.netlify.app/optimized_img/gallery/event/event1.jpg'
            alt='image'
          />
        </div>
        <div className='w-1/4 ml-3'>
          <Img src='https://natura.netlify.app/optimized_img/kv/sp/spring/sp_b.jpg' alt='image' />
        </div>
        <div className='w-1/4 ml-3'>
          <Img src='https://natura.netlify.app/optimized_img/gallery/foods/food1.jpg' alt='image' />
        </div>
      </div>
      <div className='flex h-60 mt-3'>
        <div className='w-1/4'>
          <Img src='https://natura.netlify.app/optimized_img/gallery/foods/food7.jpg' alt='image' />
        </div>
        <div className='w-2/4 ml-3'>
          <Img src='https://natura.netlify.app/optimized_img/gallery/top/img2.jpg' alt='image' />
        </div>
        <div className='w-1/4 ml-3'>
          <Img
            src='https://natura.netlify.app/optimized_img/gallery/event/event8.jpg'
            alt='image'
          />
        </div>
      </div>
    </div>
  )
}

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

import PhotoAlbum from 'react-photo-album'

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]

const unsplashPhotos = [
  {
    src: '/img/gallery/food/img1.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/img/gallery/food/img2.jpg',
    width: 500,
    height: 750,
  },
  {
    src: '/img/gallery/food/img3.jpg',
    width: 500,
    height: 750,
  },
  {
    src: '/img/gallery/food/img4.jpg',
    width: 500,
    height: 750,
  },
  {
    src: '/img/gallery/food/img5.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/img/gallery/food/img6.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/img/gallery/food/img7.jpg',
    width: 500,
    height: 750,
  },
  {
    src: '/img/gallery/food/img8.jpg',
    width: 500,
    height: 750,
  },
  {
    src: '/img/gallery/food/img9.jpg',
    width: 500,
    height: 750,
  },
]

const photos = unsplashPhotos.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint)
    return {
      src: photo.src,
      width: breakpoint,
      height,
    }
  }),
}))

export const Food_PC = () => <PhotoAlbum layout='rows' photos={photos} />

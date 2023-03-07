import PhotoAlbum from 'react-photo-album'

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]

const unsplashPhotos = [
  {
    src: '/img/gallery/food/img1.jpg',
    width: 600,
    height: 400,
    alt: 'わんこそば',
  },
  {
    src: '/img/gallery/food/img2.jpg',
    width: 500,
    height: 750,
    alt: '田沢湖 湖畔の杜ビール',
  },
  {
    src: '/img/gallery/food/img3.jpg',
    width: 500,
    height: 750,
    alt: '大同苑 盛岡冷麺',
  },
  {
    src: '/img/gallery/food/img4.jpg',
    width: 500,
    height: 750,
    alt: 'ローストビーフ',
  },
  {
    src: '/img/gallery/food/img5.jpg',
    width: 600,
    height: 400,
    alt: 'あら汁',
  },
  {
    src: '/img/gallery/food/img6.jpg',
    width: 600,
    height: 400,
    alt: '料理',
  },
  {
    src: '/img/gallery/food/img7.jpg',
    width: 500,
    height: 750,
    alt: '松茸',
  },
  {
    src: '/img/gallery/food/img8.jpg',
    width: 500,
    height: 750,
    alt: '羊羹',
  },
  {
    src: '/img/gallery/food/img9.jpg',
    width: 500,
    height: 750,
    alt: 'ジンギスカン',
  },
]

const photos = unsplashPhotos.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  alt: photo.alt,
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

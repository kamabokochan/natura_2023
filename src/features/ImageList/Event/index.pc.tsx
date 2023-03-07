import PhotoAlbum from 'react-photo-album'

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]

const unsplashPhotos = [
  {
    src: '/img/gallery/event/img1.jpg',
    width: 600,
    height: 400,
    alt: '盛岡さんさ踊り',
  },
  {
    src: '/img/gallery/event/img2.jpg',
    width: 600,
    height: 400,
    alt: '紫波夏祭り 神輿',
  },
  {
    src: '/img/gallery/event/img3.jpg',
    width: 600,
    height: 400,
    alt: '紫波夏祭り 花火',
  },
  {
    src: '/img/gallery/event/img4.jpg',
    width: 500,
    height: 748,
    alt: 'チャグチャグ馬コ',
  },
  {
    src: '/img/gallery/event/img5.jpg',
    width: 600,
    height: 400,
    alt: '花巻まつり',
  },
  {
    src: '/img/gallery/event/img6.jpg',
    width: 600,
    height: 400,
    alt: 'お祭り 射的',
  },
  {
    src: '/img/gallery/event/img7.jpg',
    width: 600,
    height: 400,
    alt: 'お祭り 屋台',
  },
  {
    src: '/img/gallery/event/img8.jpg',
    width: 500,
    height: 750,
    alt: 'チャグチャグ馬コ',
  },
  {
    src: '/img/gallery/event/img9.jpg',
    width: 500,
    height: 750,
    alt: '盛岡さんさ踊り',
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

export const Event_PC = () => <PhotoAlbum layout='rows' photos={photos} />

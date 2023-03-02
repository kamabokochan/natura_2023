import PhotoAlbum from 'react-photo-album'

const photos = [
  {
    src: '/img/gallery/img1.jpg',
    width: 307,
    height: 205,
  },
  {
    src: '/img/gallery/img2.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/img/gallery/img3.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/img/gallery/img4.jpg',
    width: 500,
    height: 748,
  },
  {
    src: '/img/gallery/img5.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/img/gallery/img6.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/img/gallery/img7.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/img/gallery/img8.jpg',
    width: 500,
    height: 750,
  },
  {
    src: '/img/gallery/img9.jpg',
    width: 500,
    height: 750,
  },
]

export const Gallery = () => <PhotoAlbum layout='rows' photos={photos} />

// @see: https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
  title: '東北・岩手の写真撮影 | フォトスタジオ NATURA（ナチューラ）',
  description:
    'フォトスタジオ NATURA（ナチューラ）は、東北、主に岩手県を中心に活動しており、 広告や雑誌、出版物の取材撮影、人物や建築物、料理、スポーツなど幅広いジャンルの撮影を手がけています。 岩手県の美しい風景や文化、人々の温かさを写真を通じてお伝えします。',
  canonical: 'https://photostudionatura.vercel.app/',
  openGraph: {
    url: 'https://photostudionatura.vercel.app/',
    title: '東北・岩手の写真撮影 | フォトスタジオ NATURA（ナチューラ）',
    description:
      'フォトスタジオ NATURA（ナチューラ）は、東北、主に岩手県を中心に活動しており、 広告や雑誌、出版物の取材撮影、人物や建築物、料理、スポーツなど幅広いジャンルの撮影を手がけています。 岩手県の美しい風景や文化、人々の温かさを写真を通じてお伝えします。',
    images: [
      {
        url: 'https://photostudionatura.vercel.app/img/ogp/ogp.jpg',
        width: 600,
        height: 330,
        alt: '東北・岩手の写真撮影 | フォトスタジオ NATURA（ナチューラ）',
        type: 'image/jpeg',
      },
    ],
    siteName: 'フォトスタジオ NATURA（ナチューラ）',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@photo_natura',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  )
}

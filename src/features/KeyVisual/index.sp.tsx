import React from 'react'
import styled from 'styled-components'
import { SwiperView } from './components/SwiperView'

export const KeyVisual_SP = () => {
  return (
    <KeyVisualRoot>
      <KeyVisualTextWrap>
        <KerVisualHeading>東北・岩手の美しい瞬間を、写真に刻む。</KerVisualHeading>
        <KerVisualBody>
          フォトスタジオ NATURA（ナチューラ）は、東北、主に岩手県を中心に活動しており、
          広告や雑誌、出版物の取材撮影、人物や建築物、料理、スポーツなど幅広いジャンルの撮影を手がけています。
          岩手県の美しい風景や文化、人々の温かさを写真を通じてお伝えします。
        </KerVisualBody>
      </KeyVisualTextWrap>
      <SwiperWrap>
        <SwiperView />
      </SwiperWrap>
    </KeyVisualRoot>
  )
}

const KeyVisualRoot = styled.div`
  padding: 48px 0;
`

const SwiperWrap = styled.div`
  width: 100%;
  margin-top: 24px;
`

const KerVisualHeading = styled.p`
  font-size: 22px;
  font-family: serif;
`

const KerVisualBody = styled.p`
  font-size: 14px;
  font-family: serif;
  max-width: 680px;
  margin-top: 18px;
`

const KeyVisualTextWrap = styled.div``

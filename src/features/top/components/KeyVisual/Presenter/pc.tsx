import React from 'react'
import styled from 'styled-components'
import { SwiperView } from '../SwiperView'

export const PCKeyVisual = () => {
  return (
    <KeyVisualRoot>
      <SwiperWrap>
        <SwiperView />
      </SwiperWrap>
      <KeyVisualTextWrap>
        <KerVisualBody>
          フォトスタジオ NATURA（ナチューラ）は、東北、主に岩手県を中心に活動しており、
          広告や雑誌、出版物の取材撮影、人物や建築物、料理、スポーツなど幅広いジャンルの撮影を手がけています。
          岩手県の美しい風景や文化、人々の温かさを写真を通じてお伝えします。
        </KerVisualBody>
        <KerVisualHeading>岩手の美しい瞬間を、写真に刻む。</KerVisualHeading>
      </KeyVisualTextWrap>
    </KeyVisualRoot>
  )
}

const KeyVisualRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`

const SwiperWrap = styled.div`
  width: calc(100% - 250px);
  max-width: 680px;
`

const KerVisualHeading = styled.p`
  writing-mode: vertical-rl;
  font-size: 30px;
  font-family: serif;
  margin-left: 12px;
`

const KerVisualBody = styled.p`
  writing-mode: vertical-rl;
  font-size: 18px;
  font-family: serif;
  height: 380px;
`

const KeyVisualTextWrap = styled.div`
  max-width: 250px;
  margin-left: 60px;
  display: flex;
  justify-content: center;
  align-items: baseline;
`

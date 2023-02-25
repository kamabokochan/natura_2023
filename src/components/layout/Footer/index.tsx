import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterRoot>
      <p>有限会社フォトスタジオ ナチューラ</p>
      <Caution>
        <p>※当サイトおよびSNS等の写真に関しまして、無断転載・無断使用はご遠慮下さい</p>
        <p>
          Please refrain from reprinting or using photos on this site and SNS without permission.
        </p>
      </Caution>
      <Copy>
        <p>© NATURA CO., LTD.</p>
      </Copy>
    </FooterRoot>
  )
}

const FooterRoot = styled.footer`
  background-color: #fafafa;
  padding: 16px;
`

const Caution = styled.div`
  font-size: 10px;
`

const Copy = styled.div`
  padding: 10px 12px;
  font-size: 10px;
  text-align: center;
`

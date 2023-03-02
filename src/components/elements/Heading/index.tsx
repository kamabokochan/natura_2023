import { Heading as Chakura, HeadingProps } from '@chakra-ui/react'
import styled from 'styled-components'

type Props = {
  children: string
} & HeadingProps

export const Heading = (props: Props) => {
  const { children } = props

  return <Chakura {...props}>{children}</Chakura>
}

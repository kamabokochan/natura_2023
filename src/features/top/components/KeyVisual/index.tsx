import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { PCKeyVisual } from './Presenter/pc'
import { SPKeyVisual } from './Presenter/sp'

export const KeyVisual = () => {
  const [isPC] = useMediaQuery('(min-width: 1024px)')
  if (isPC) {
    return <PCKeyVisual />
  }
  return <SPKeyVisual />
}

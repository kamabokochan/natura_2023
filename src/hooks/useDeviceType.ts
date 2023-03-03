import { useMediaQuery } from '@chakra-ui/react'

export const useDeviceType = () => {
  const [isPC] = useMediaQuery('(min-width: 1024px)')
  return isPC
}

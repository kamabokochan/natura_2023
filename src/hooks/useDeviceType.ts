import { useMediaQuery } from '@chakra-ui/react'

export const useDeviceType = () => {
  const [isPC, isSP] = useMediaQuery(['(min-width: 1024px)', '(max-width: 1023px)'])
  return { isPC, isSP }
}

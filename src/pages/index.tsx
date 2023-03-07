import { TopView_PC } from '@/components/screens/TopView/index.pc'
import { TopView_SP } from '@/components/screens/TopView/index.sp'
import { useDeviceType } from '@/hooks/useDeviceType'

export default function Top() {
  const { isPC, isSP } = useDeviceType()
  if (isPC) {
    return <TopView_PC />
  }
  if (isSP) {
    return <TopView_SP />
  }
  return <></>
}

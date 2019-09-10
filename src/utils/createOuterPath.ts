import { PieData } from '../types'

export const createOuterPath = (data: PieData, rx: number, ry: number, hight: number): string => {

  const startAngle = (data.startAngle > Math.PI ? Math.PI : data.startAngle)
  const endAngle = (data.endAngle > Math.PI ? Math.PI : data.endAngle)
  const sx = rx * Math.cos(startAngle)
  const sy = ry * Math.sin(startAngle)
  const ex = rx * Math.cos(endAngle)
  const ey = ry * Math.sin(endAngle)

  return `M ${sx} ${hight + sy} A ${rx} ${ry} 0 0 1 ${ex} ${hight + ey} L ${ex} ${ey} A ${rx} ${ry} 0 0 0 ${sx} ${sy} z`
}

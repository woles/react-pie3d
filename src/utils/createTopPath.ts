import { PieData } from '../types'

export const createTopPath = (data: PieData, rx: number, ry: number, ir: number): string => {
  const { endAngle, startAngle } = data

  if (endAngle - startAngle === 0) {
    return 'M 0 0'
  }

  const sx = rx * Math.cos(startAngle)
  const sy = ry * Math.sin(startAngle)
  const ex = rx * Math.cos(endAngle)
  const ey = ry * Math.sin(endAngle)

  return `M ${sx} ${sy} A ${rx} ${ry} 0 ${endAngle - startAngle > Math.PI ? 1 : 0} 1 ${ex} ${ey} L ${ir * ex} ${ir * ey} A ` +
    `${ir * rx} ${ir * ry} 0 ${endAngle - startAngle > Math.PI ? 1 : 0} 0 ${ir * sx} ${ir * sy} z`
}

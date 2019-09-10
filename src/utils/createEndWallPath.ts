import { PieData } from '../types'

export const createEndWallPath = (data: PieData, rx: number, ry: number, hight: number, ir: number): string => {
  const ex = rx * Math.cos(data.endAngle)
  const ey = ry * Math.sin(data.endAngle)

  return `M ${ir * ex} ${ir * ey} L ${ir * ex} ${ir * ey + hight} L ${ex} ${ey + hight} L ${ex} ${ey} z`
}

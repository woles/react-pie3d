import { PieData } from '../types'

export const createStartWallPath = (data: PieData, rx: number, ry: number, hight: number, ir: number): string => {
  const sx = rx * Math.cos(data.startAngle)
  const sy = ry * Math.sin(data.startAngle)

  return `M ${ir * sx} ${ir * sy} L ${ir * sx} ${ir * sy + hight} L ${sx} ${sy + hight} L ${sx} ${sy} z`
}

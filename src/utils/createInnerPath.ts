
import { PieData } from '../types'

export const createInnerPath = (data: PieData, rx: number, ry: number, height: number, ir: number): string => {
  const startAngle = (data.startAngle < Math.PI ? Math.PI : data.startAngle)
  const endAngle = (data.endAngle < Math.PI ? Math.PI : data.endAngle)
  const sx = ir * rx * Math.cos(startAngle)
  const sy = ir * ry * Math.sin(startAngle)
  const ex = ir * rx * Math.cos(endAngle)
  const ey = ir * ry * Math.sin(endAngle)

  return `M ${sx} ${sy} A ${ir * rx} ${ir * ry} 0 0 1 ${ex} ${ey} L ${ex} ${height + ey} A ${ir * rx} ${ir * ry} `
    + `0 0 0 ${sx} ${height + sy} z`
}

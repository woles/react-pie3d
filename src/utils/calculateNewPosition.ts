import { PieData } from '../types'
import { calculateMiddleAngle } from './calculateMiddleAngle'

export const calculateNewPosition = (data: PieData, rx: number, ry: number, moveDistance: number): [number, number] => {
  const middleAngle = calculateMiddleAngle(data.startAngle, data.endAngle)
  return [
    moveDistance * rx * Math.cos(middleAngle > Math.PI ? middleAngle : -middleAngle),
    moveDistance * ry * Math.sin(middleAngle)
  ]
}

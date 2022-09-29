import { DEFAULT_COLORS } from '../const'
import { MappedData } from '../types'

export const mapRawData = (data: number[]): MappedData => {
  const sum = data.reduce((accumulator, value) => accumulator + value, 0)

  return data.reduce((accumulator: MappedData, value, index) => {
    const angle = value / sum * 2 * Math.PI
    const previousValue = accumulator[index - 1]

    return [
      ...accumulator,
      {
        color: DEFAULT_COLORS[index % DEFAULT_COLORS.length],
        endAngle: previousValue !== undefined ? previousValue.endAngle + angle : angle,
        index,
        moved: false,
        percentageValue: value / sum,
        startAngle: previousValue !== undefined ? previousValue.endAngle : 0,
        value
      }
    ]
  }, [])
}

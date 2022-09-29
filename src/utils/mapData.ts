import { DEFAULT_COLORS } from '../const'
import { MappedData, UserData } from '../types'

export const mapData = (data: UserData[]): MappedData => {
  const sum = data.reduce((accumulator, item) => accumulator + item.value, 0)

  return data.reduce((accumulator: MappedData, item, index) => {
    const angle = item.value / sum * 2 * Math.PI
    const previousValue = accumulator[index - 1]

    return [
      ...accumulator,
      {
        color: item.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length],
        endAngle: previousValue !== undefined ? previousValue.endAngle + angle : angle,
        index,
        label: item.label,
        moved: false,
        percentageValue: item.value / sum,
        startAngle: previousValue !== undefined ? previousValue.endAngle : 0,
        value: item.value
      }
    ]
  }, [])
}

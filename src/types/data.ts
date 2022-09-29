export type Data = number[] | UserData[]

export type UserData = {
  color?: string
  label?: string
  value: number
}

export type PieData = {
  color: string
  endAngle: number
  index: number
  label?: string
  moved: boolean
  percentageValue: number
  startAngle: number
  value: number
}

export type MappedData = PieData[]

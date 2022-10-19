export type Config = {
  angle?: number
  height?: number
  ir?: number
  fixed?: number
  moveDistance?: number
  onClick?: (index: number) => void
  showTooltips?: boolean
  size?: number
  showLabels?: boolean
  stroke?: string
  strokeWidth?: number
  textSize?: number
  tooltipShowName?: boolean
  tooltipShowPercentage?: boolean
  tooltipShowValue?: boolean
}

export type PieConfig = {
  angle: number
  height: number
  ir: number
  fixed: number
  moveDistance: number
  onClick: (index: number) => void
  showTooltips: boolean
  size: number
  showLabels: boolean
  stroke: string
  strokeWidth: number
  textSize: number
  tooltipShowName: boolean
  tooltipShowPercentage: boolean
  tooltipShowValue: boolean
}

export type Data = number[] | UserData[]

export type UserData = {
  color?: string
  label?: string
  value: number
}

export type PieSlice = {
  color: string
  endAngle: number
  index: number
  label?: string
  moved: boolean
  percentageValue: number
  startAngle: number
  value: number
  middleAngle: number
}

export type PieSlices = PieSlice[]

export type PathType = 'end' | 'inner' | 'outer' | 'start' | 'top'

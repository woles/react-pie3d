import { PieConfig } from './types'

export const DEFAULT_CONFIG: PieConfig = {
  angle: 40,
  height: 40,
  ir: 0.6,
  moveDistance: 0.2,
  onClick: (index) => null,
  showTooltips: true,
  size: 0.8,
  stroke: 'white',
  strokeWidth: 1,
  tooltipShowName: true,
  tooltipShowPercentage: true,
  tooltipShowValue: true,
}

export const DEFAULT_COLORS = [
  'limegreen',
  'mediumvioletred',
  'mediumpurple',
  'orange',
  'firebrick',
  'chartreuse',
  'dodgerblue',
  'tomato',
]

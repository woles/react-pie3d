import { PieConfig } from './types'

export const defaultConfig: PieConfig = {
  angle: 80,
  height: 20,
  ir: 0.6,
  moveDistance: 0.05,
  onClick: (index) => null,
  showTooltips: true,
  size: 0.8,
  stroke: 'white',
  strokeWidth: 1,
  tooltipShowName: true,
  tooltipShowPercentage: true,
  tooltipShowValue: true
}

export const pi = Math.PI

export const defaultColors = [
  'limegreen',
  'mediumvioletred',
  'mediumpurple',
  'orange',
  'firebrick',
  'chartreuse',
  'dodgerblue',
  'tomato'
]

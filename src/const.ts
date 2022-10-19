import { PieConfig } from './types'

export const defaultConfig: PieConfig = {
  angle: 80,
  height: 20,
  ir: 0.6,
  fixed: 2,
  moveDistance: 0.05,
  // eslint-disable-next-line no-unused-vars
  onClick: (index) => null,
  showTooltips: true,
  size: 0.8,
  showLabels: true,
  stroke: 'white',
  strokeWidth: 1,
  textSize: 12,
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

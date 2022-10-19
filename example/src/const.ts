import { ChartContextType } from './types'

export const defaultConfig: ChartContextType['config'] = {
  angle: 80,
  height: 20,
  ir: 0.6,
  moveDistance: 0.05,
  onClick: (index) => null,
  showLabels: true,
  showTooltips: true,
  size: 0.8,
  stroke: 'white',
  strokeWidth: 1,
  tooltipShowName: true,
  tooltipShowPercentage: true,
  tooltipShowValue: false
}

export const defaultData: ChartContextType['data'] = [
  { value: 30, color: '#FF0000',  label: 'apples' },
  { value: 50, color: '#00FF00',  label: 'avocados' },
  { value: 10, color: '#FFFF00',  label: 'lemons' },
  { value: 80, color: '#0000FF',  label: 'oranges' }
]

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

import { ChartContextType } from './types'

export const defaultConfig: ChartContextType['config'] = {
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

export const defaultData: ChartContextType['data'] = [
  { value: 30, color: 'red',  label: 'apples' },
  { value: 50, color: 'green',  label: 'avocados' },
  { value: 10, color: 'yellow',  label: 'lemons' },
  { value: 80, color: 'orange',  label: 'oranges' }
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

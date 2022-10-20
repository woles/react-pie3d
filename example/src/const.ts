import { ChartContextType } from './types'

export const defaultConfig: ChartContextType['config'] = {
  angle: 80,
  height: 20,
  ir: 0.6,
  fixed: 2,
  moveDistance: 0.05,
  onClick: (index) => null,
  showLabels: true,
  showTooltips: true,
  showLabelPercentage: true,
  size: 0.6,
  stroke: 'white',
  strokeWidth: 1,
  textSize: 14,
  tooltipShowName: true,
  tooltipShowPercentage: true,
  tooltipShowValue: false,
}

export const defaultData: ChartContextType['data'] = [
  { value: 30, color: '#FF0000',  label: 'apples' },
  { value: 50, color: '#00FF00',  label: 'avocados' },
  { value: 20, color: '#FFFF00',  label: 'lemons' },
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

export const fruits = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'bell pepper',
  'bilberry',
  'blackberry',
  'blackcurrant',
  'blood orange',
  'blueberry',
  'boysenberry',
  'breadfruit',
  'canary melon',
  'cantaloupe',
  'cherimoya',
  'cherry',
  'chili pepper',
  'clementine',
  'cloudberry',
  'coconut',
  'cranberry',
  'cucumber',
  'currant',
  'damson',
  'date',
  'dragonfruit',
  'durian',
  'eggplant',
  'elderberry',
  'feijoa',
  'fig',
  'goji berry',
  'gooseberry',
  'grape',
  'grapefruit',
  'guava',
  'honeydew',
  'huckleberry',
  'jackfruit',
  'jambul',
  'jujube',
  'kiwi fruit',
  'kumquat',
  'lemon',
  'lime',
  'loquat',
  'lychee',
  'mandarine',
  'mango',
  'mulberry',
  'nectarine',
  'nut',
  'olive',
  'orange',
  'papaya',
  'passionfruit',
  'peach',
  'pear',
  'persimmon',
  'physalis',
  'pineapple',
  'plum',
  'pomegranate',
  'pomelo',
  'purple mangosteen',
  'quince',
  'raisin',
  'rambutan',
  'raspberry',
  'redcurrant',
  'rock melon',
  'salal berry',
  'satsuma',
  'star fruit',
  'strawberry',
  'tamarillo',
  'tangerine',
  'tomato',
  'ugli fruit',
  'watermelon'
]

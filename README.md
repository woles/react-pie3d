# React 3d pie/donut chart with typescrpit

SVG 3D pie / donut chart with tooltips and typescript

## Demo

![chart](https://github.com/woles/react-pie3d/blob/master/img/screen.png)

[https://woles.github.io/react-pie3d/](https://woles.github.io/react-pie3d/)

## Installation

    npm install react-pie3d

or 

    yarn add react-pie3d

## Usage

    import { Pie3D } from 'react-pie3d'

    <Pie3D config={config} data={data} />

How to use the types:

    React.ComponentProps<typeof Pie3D>

## Props:

### Data (data)

Data is an array of two possible types:

Raw data (`number[]`)

    const data = [10, 20, 30] 

Or (`{value: number, label?: string, color?: string}[]`)

    const data = [
      { value: 10, label: 'apples', color: 'red' }, 
      { value: 20, label: 'bananas', color: 'green' },
      { value: 30, label: 'oranges', color: 'blue' },
    ]

### Config (config)

| Name   |      Type      |  Default Value | Description |
|----------|:-------------:|----------:|------:|
| angle |  number | 40 | Angle of the chart |
| fixed | number | 2 | Floating point precision |
| height |    number   |   40 | Hight of the walls |
| ir | number |    0.6 | Inner radius in % |
| moveDistance | number |    0.2 | How far the slice can move in % (0 means no move on click) |
| onClick | function |    (index: number) => null | custom function on slice click |
| showLabels | boolean | true | show labels on chart
| showLabelPercentage | boolean | true | show percentage value on chart 
| showTooltips | boolean |    true | Show tooltip on slice hover |
| size | number |    0.8 | Size in % of the container |
| stroke | string |    '#fff' | Color of the stroke |
| strokeWidth | number |    1 | width of stroke in px |
| tooltipShowName | boolean |    true | show label in tooltip |
| tooltipShowPercentage | boolean |    true | show percentage value in tooltip |
| textSize |  number | 12 | size of labels font in pixels |
| tooltipShowValue | boolean |    true | show value in tooltip|



## License

MIT License 2019 © woles

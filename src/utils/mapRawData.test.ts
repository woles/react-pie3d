import { mapRawData } from './mapRawData'

test('MapData results', () => {
  expect(mapRawData([10, 20, 30])).toStrictEqual([
    {
      color: 'limegreen',
      endAngle: 1.0471975511965976,
      index: 0,
      moved: false,
      percentageValue: 0.16666666666666666,
      startAngle: 0,
      value: 10
    },
    {
      color: 'mediumvioletred',
      endAngle: 3.141592653589793,
      index: 1,
      moved: false,
      percentageValue: 0.3333333333333333,
      startAngle: 1.0471975511965976,
      value: 20
    },
    {
      color: 'mediumpurple',
      endAngle: 6.283185307179586,
      index: 2,
      moved: false,
      percentageValue: 0.5,
      startAngle: 3.141592653589793,
      value: 30
    }
  ])
})

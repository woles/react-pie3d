import { mapData } from './mapData'

const data = [{
  color: 'blue',
  label: 'test-20',
  value: 20,
}, {
  color: 'red',
  label: 'test-30',
  value: 30,
}, {
  color: 'green',
  label: 'test-50',
  value: 50,
}]

test('MapData results', () => {
  expect(mapData(data)).toStrictEqual([
    {
      color: 'blue',
      endAngle: 1.2566370614359172,
      index: 0,
      label: 'test-20',
      moved: false,
      percentageValue: 0.2,
      startAngle: 0,
      value: 20,
    },
    {
      color: 'red',
      endAngle: 3.141592653589793,
      index: 1,
      label: 'test-30',
      moved: false,
      percentageValue: 0.3,
      startAngle: 1.2566370614359172,
      value: 30,
    },
    {
      color: 'green',
      endAngle: 6.283185307179586,
      index: 2,
      label: 'test-50',
      moved: false,
      percentageValue: 0.5,
      startAngle: 3.141592653589793,
      value: 50,
    },
  ])
})

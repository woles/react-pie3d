import { calculateNewPosition } from './calculateNewPosition'

const data = {
  color: '',
  endAngle: Math.PI / 2,
  index: 0,
  moved: false,
  percentageValue: 0.2,
  startAngle: 0,
  value: 30
}

test('Create top svg path', () => {
  expect(calculateNewPosition(data, 100, 80, 0.2))
    .toEqual([14.142135623730951, 11.31370849898476])
})

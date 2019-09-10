import { createStartWallPath } from './createStartWallPath'

const data = {
  color: '',
  endAngle: Math.PI / 2,
  index: 0,
  moved: false,
  percentageValue: 0.2,
  startAngle: 0,
  value: 30,
}

test('Create start wall svg path', () => {
  expect(createStartWallPath(data, 120, 120, 40, 0.8))
    .toBe('M 96 0 L 96 40 L 120 40 L 120 0 z')
})

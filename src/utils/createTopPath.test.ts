import { createTopPath } from './createTopPath'

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
  expect(createTopPath(data, 120, 120, 0.6))
    .toBe('M 120 0 A 120 120 0 0 1 7.34788079488412e-15 120 L 4.408728476930472e-15 72 A 72 72 0 0 0 72 0 z')
})

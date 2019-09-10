import { createOuterPath } from './createOuterPath'

const data = {
  color: '',
  endAngle: Math.PI / 2,
  index: 0,
  moved: false,
  percentageValue: 0.2,
  startAngle: 0,
  value: 30,
}

test('Create outer svg path', () => {
  expect(createOuterPath(data, 120, 120, 40))
    .toBe('M 120 40 A 120 120 0 0 1 7.34788079488412e-15 160 L 7.34788079488412e-15 120 A 120 120 0 0 0 120 0 z')
})

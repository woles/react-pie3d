import { createEndWallPath } from './createEndWallPath'

const data = {
  color: '',
  endAngle: Math.PI / 2,
  index: 0,
  moved: false,
  percentageValue: 0.2,
  startAngle: 0,
  value: 30,
}

test('Create end wall svg path', () => {
  expect(createEndWallPath(data, 120, 120, 40, 0.8))
    .toBe('M 5.8783046359072966e-15 96 L 5.8783046359072966e-15 136 L 7.34788079488412e-15 160 L 7.34788079488412e-15 120 z')
})

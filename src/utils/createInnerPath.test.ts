import { createInnerPath } from './createInnerPath'

const data = {
  color: '',
  endAngle: Math.PI / 2,
  index: 0,
  moved: false,
  percentageValue: 0.2,
  startAngle: 0,
  value: 30
}

test('Create inner wall svg path', () => {
  expect(createInnerPath(data, 120, 120, 40, 0.8))
    .toBe('M -96 1.175660927181459e-14 A 96 96 0 0 1 -96 1.175660927181459e-14 ' +
      'L -96 40.000000000000014 A 96 96 0 0 0 -96 40.000000000000014 z')
})

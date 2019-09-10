import { calculateMiddleAngle } from './calculateMiddleAngle'

test('Calculate middle angle of slice', () => {
  expect(calculateMiddleAngle(Math.PI / 2, Math.PI)).toBe(3 * Math.PI / 4)
})

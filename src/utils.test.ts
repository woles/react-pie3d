import { pi } from './const'
import {
  checkIsDataArrayOfNumbers,
  createEndWallPath,
  createInnerPath,
  createOuterPath,
  createStartWallPath,
  createTopPath,
  getMiddleAngle,
  getNewPosition,
  mapRowData
} from './utils'

describe(createEndWallPath, () => {
  it('Creates end wall svg path', () => {
    const result = createEndWallPath(0, 120, 120, 40, 0.8)

    expect(result).toBe('M 96 0 L 96 40 L 120 40 L 120 0 z')
  })
})

describe(createInnerPath, () => {
  it('Creates inner path', () => {
    const result = createInnerPath(0, pi / 2, 120, 120, 40, 0.8)

    expect(result).toEqual('M -96 1.175660927181459e-14 A 96 96 0 0 1 -96 1.175660927181459e-14 ' +
    'L -96 40.000000000000014 A 96 96 0 0 0 -96 40.000000000000014 z')
  })
})

describe(createOuterPath, () => {
  it('should create an outer path', () => {
    const result = createOuterPath(0, pi / 2, 120, 120, 40)

    expect(result)
      .toEqual('M 120 40 A 120 120 0 0 1 7.34788079488412e-15 160 L 7.34788079488412e-15 120 A 120 120 0 0 0 120 0 z')
  })
})

describe(createStartWallPath, () => {
  it('should create a start wall path', () => {
    const result = createStartWallPath(0, pi / 2, 120, 120, 40, 0.8)

    expect(result).toEqual('M 96 0 L 96 40 L 120 40 L 120 0 z')
  })
})

describe(createTopPath, () => {
  it('should create top svg path', () => {
    const result = createTopPath(0, pi / 2, 10, 50, 5)

    expect(result).toEqual('M 10 0 A 10 50 0 0 1 6.123233995736766e-16 50 L 3.061616997868383e-15' +
      ' 250 A 50 250 0 00 50 0 z')
  })
})

describe(getMiddleAngle, () => {
  it('should return middle of the angel', () => {
    const result = getMiddleAngle(10, 80)

    expect(result).toEqual(45)
  })
})

describe(getNewPosition, () => {
  it('should return new position', () => {
    const result = getNewPosition(0, pi / 2, 10, 50, 5)

    expect(result).toEqual([35.35533905932738, 176.77669529663686])
  })
})

describe(checkIsDataArrayOfNumbers, () => {
  it('should return true if its array of numbers', () => {
    const result = checkIsDataArrayOfNumbers([1, 10, 50, 40])

    expect(result).toEqual(true)
  })

  it('should return false if its array of objects', () => {
    const result = checkIsDataArrayOfNumbers([{ value: 1 }, { value: 2 }])

    expect(result).toEqual(false)
  })
})

describe(mapRowData, () => {
  it('should return mapped row data to user data', () => {
    const data = [10, 40, 30, 20]
    const result = mapRowData(data)

    expect(result).toEqual([
      { value: 10 },
      { value: 40 },
      { value: 30 },
      { value: 20 }
    ])
  })
})

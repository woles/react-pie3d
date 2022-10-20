import { pi } from './const'
import {
  checkIsDataArrayOfNumbers,
  checkIsUserData,
  createElementPieces,
  createEndWallPath,
  createInnerPath,
  createLabelPath,
  createOuterPath,
  createStartWallPath,
  createTopPath,
  getMiddleAngle,
  getNewPosition,
  mapData,
  mapRowData,
  moveElement
} from './utils'

const mappedData = [
  {
    color: 'limegreen',
    endAngle: 1.0471975511965976,
    index: 0,
    label: undefined,
    middleAngle: 0.5235987755982988,
    moved: false,
    percentageValue: 0.16666666666666666,
    startAngle: 0,
    value: 10
  },
  {
    color: 'mediumvioletred',
    endAngle: 4.1887902047863905,
    index: 1,
    label: undefined,
    middleAngle: 2.617993877991494,
    moved: false,
    percentageValue: 0.5,
    startAngle: 1.0471975511965976,
    value: 30
  },
  {
    color: 'mediumpurple',
    endAngle: 6.283185307179586,
    index: 2,
    label: undefined,
    middleAngle: 5.235987755982988,
    moved: false,
    percentageValue: 0.3333333333333333,
    startAngle: 4.1887902047863905,
    value: 20
  }
]

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

describe(checkIsUserData, () => {
  it('should return true if its array of UserData', () => {
    const result = checkIsUserData([{ test: 1 }, { test: 2 }])

    expect(result).toEqual(false)
  })

  it('should return false is not array of UserData', () => {
    const result = checkIsUserData([{ value: 1 }, { value: 2 }])

    expect(result).toEqual(true)
  })
})

describe(createEndWallPath, () => {
  it('Creates end wall svg path', () => {
    const result = createEndWallPath(0, 120, 120, 40, 0.8)

    expect(result).toEqual('M 96 0 L 96 40 L 120 40 L 120 0 z')
  })
})

describe(createInnerPath, () => {
  it('Creates inner path', () => {
    const result = createInnerPath(0, pi / 2, 120, 120, 40, 0.8)

    expect(result).toEqual('M -96 1.175660927181459e-14 A 96 96 0 0 1 -96 1.175660927181459e-14 ' +
    'L -96 40.000000000000014 A 96 96 0 0 0 -96 40.000000000000014 z')
  })
})

describe(createLabelPath, () => {
  it('Creates a label path', () => {
    const result = createLabelPath(pi / 3, 120, 120, 20, 100, 12)

    expect(result).toEqual({
      path: 'M 60.000000000000014 113.92304845413263 L 80.00000000000001 133.92304845413264 l 20 0',
      x: 101.00000000000001,
      y: 137.55941209049627
    })
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
    const result = createStartWallPath(0, 120, 120, 40, 0.8)

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
    const result = getNewPosition(pi / 4, 10, 50, 5)

    expect(result).toEqual([35.35533905932738, 176.77669529663686])
  })
})

describe(mapData, () => {
  it('should return mapped data for pie slices', () => {
    const data = [
      { value: 10, label: 'orange', color: 'orange' },
      { value: 30, label: 'lemon', color: 'yellow' },
      { value: 20, label: 'apple', color: 'green' }
    ]
    const result = mapData(data)

    expect(result).toEqual([
      {
        color: 'orange',
        endAngle: 1.0471975511965976,
        index: 0,
        label: 'orange',
        middleAngle: 0.5235987755982988,
        moved: false,
        percentageValue: 0.16666666666666666,
        startAngle: 0,
        value: 10
      },
      {
        color: 'yellow',
        endAngle: 4.1887902047863905,
        index: 1,
        label: 'lemon',
        middleAngle: 2.617993877991494,
        moved: false,
        percentageValue: 0.5,
        startAngle: 1.0471975511965976,
        value: 30
      },
      {
        color: 'green',
        endAngle: 6.283185307179586,
        index: 2,
        label: 'apple',
        middleAngle: 5.235987755982988,
        moved: false,
        percentageValue: 0.3333333333333333,
        startAngle: 4.1887902047863905,
        value: 20
      }
    ])
  })

  it('should return mapped data for pie slices without all keys', () => {
    const data = [
      { value: 10 },
      { value: 30 },
      { value: 20 }
    ]
    const result = mapData(data)

    expect(result).toEqual(mappedData)
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

describe(moveElement, () => {
  it('should toggle move value of element', () => {
    const result = moveElement(0, [
      {
        color: 'limegreen',
        endAngle: 1.0471975511965976,
        index: 0,
        label: undefined,
        middleAngle: 0.5235987755982988,
        moved: false,
        percentageValue: 0.16666666666666666,
        startAngle: 0,
        value: 10
      },
      {
        color: 'mediumvioletred',
        endAngle: 4.1887902047863905,
        index: 1,
        label: undefined,
        middleAngle: 2.617993877991494,
        moved: false,
        percentageValue: 0.5,
        startAngle: 1.0471975511965976,
        value: 30
      }
    ])

    expect(result).toEqual([
      {
        color: 'limegreen',
        endAngle: 1.0471975511965976,
        index: 0,
        label: undefined,
        middleAngle: 0.5235987755982988,
        moved: true,
        percentageValue: 0.16666666666666666,
        startAngle: 0,
        value: 10
      },
      {
        color: 'mediumvioletred',
        endAngle: 4.1887902047863905,
        index: 1,
        label: undefined,
        middleAngle: 2.617993877991494,
        moved: false,
        percentageValue: 0.5,
        startAngle: 1.0471975511965976,
        value: 30
      }]
    )
  })
})

describe(createElementPieces, () => {
  it('should create elements for pie', () => {
    const result = createElementPieces(mappedData)

    expect(result).toEqual([
      [
        {
          color: 'limegreen',
          endAngle: 1.0471975511965976,
          index: 0,
          label: undefined,
          middleAngle: 0.5235987755982988,
          moved: false,
          percentageValue: 0.16666666666666666,
          startAngle: 0,
          value: 10
        }
      ],
      [],
      [
        {
          color: 'mediumvioletred',
          endAngle: 4.1887902047863905,
          index: 1,
          label: undefined,
          middleAngle: 2.617993877991494,
          moved: false,
          percentageValue: 0.5,
          startAngle: 1.0471975511965976,
          value: 30
        }
      ],
      [],
      [
        {
          color: 'mediumpurple',
          endAngle: 6.283185307179586,
          index: 2,
          label: undefined,
          middleAngle: 5.235987755982988,
          moved: false,
          percentageValue: 0.3333333333333333,
          startAngle: 4.1887902047863905,
          value: 20
        }
      ]
    ])
  })
})

import { defaultColors, pi } from './const'
import { PieSlices, UserData } from './types'

export const createEndWallPath = (endAngle: number, rx: number, ry: number, hight: number, ir: number): string => {
  const ex = rx * Math.cos(endAngle)
  const ey = ry * Math.sin(endAngle)

  return `M ${ir * ex} ${ir * ey} L ${ir * ex} ${ir * ey + hight} L ${ex} ${ey + hight} L ${ex} ${ey} z`
}

export const createInnerPath =
  (startAngle: number, endAngle: number, rx: number, ry: number, height: number, ir: number): string => {
    const innerStartAngle = (startAngle < pi ? pi : startAngle)
    const innerEndAngle = (endAngle < pi ? pi : endAngle)
    const sx = ir * rx * Math.cos(innerStartAngle)
    const sy = ir * ry * Math.sin(innerStartAngle)
    const ex = ir * rx * Math.cos(innerEndAngle)
    const ey = ir * ry * Math.sin(innerEndAngle)

    return `M ${sx} ${sy} A ${ir * rx} ${ir * ry} 0 0 1 ${ex} ${ey} L ${ex} ${height + ey} A ${ir * rx} ${ir * ry} ` +
    `0 0 0 ${sx} ${height + sy} z`
  }

export const createLabelPath = (
  middleAngle: number, rx: number, ry: number, height: number, isLabelRight: boolean): string => {
  const sx = rx * Math.cos(middleAngle)
  const sy = ry * Math.sin(middleAngle)

  const distance = 15

  return `M ${sx} ${sy + height / 2} L ${sx + (isLabelRight ? distance : -distance)}` +
    ` ${sy + (middleAngle < pi ? distance + height / 2 : -distance)} l ${isLabelRight ? distance : -distance} 0`
}

export const createOuterPath =
(startAngle: number, endAngle: number, rx: number, ry: number, hight: number): string => {
  const outerStartAngle = (startAngle > pi ? pi : startAngle)
  const outerEndAngle = (endAngle > pi ? pi : endAngle)
  const sx = rx * Math.cos(outerStartAngle)
  const sy = ry * Math.sin(outerStartAngle)
  const ex = rx * Math.cos(outerEndAngle)
  const ey = ry * Math.sin(outerEndAngle)

  return `M ${sx} ${hight + sy} A ${rx} ${ry} 0 0 1 ${ex} ${hight + ey} L ${ex} ${ey} A ${rx} ${ry} 0 0 0 ${sx} ${sy} z`
}

export const createStartWallPath =
(startAngle: number, rx: number, ry: number, hight: number, ir: number): string => {
  const sx = rx * Math.cos(startAngle)
  const sy = ry * Math.sin(startAngle)

  return `M ${ir * sx} ${ir * sy} L ${ir * sx} ${ir * sy + hight} L ${sx} ${sy + hight} L ${sx} ${sy} z`
}

export const createTopPath = (startAngle: number, endAngle: number, rx: number, ry: number, ir: number): string => {
  if (endAngle - startAngle === 0) {
    return 'M 0 0'
  }

  const sx = rx * Math.cos(startAngle)
  const sy = ry * Math.sin(startAngle)
  const ex = rx * Math.cos(endAngle)
  const ey = ry * Math.sin(endAngle)

  return `M ${sx} ${sy} A ${rx} ${ry} 0 ${endAngle - startAngle > pi ? 1 : 0} 1 ${ex} ` +
    `${ey} L ${ir * ex} ${ir * ey} A ${ir * rx} ${ir * ry} 0 ${endAngle - startAngle > pi ? 1 : 0}` +
    `0 ${ir * sx} ${ir * sy} z`
}

export const getMiddleAngle = (startAngle: number, endAngle: number): number =>
  startAngle + (endAngle - startAngle) / 2

export const getNewPosition = (middleAngle: number, rx: number, ry: number, moveDistance: number):
[number, number] => {
  return [
    moveDistance * rx * Math.cos(middleAngle > Math.PI ? middleAngle : -middleAngle),
    moveDistance * ry * Math.sin(middleAngle)
  ]
}

export const checkIsDataArrayOfNumbers = (data: unknown[]): boolean => {
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== 'number') {
      return false
    }
  }

  return true
}

export const checkIsUserData = (data: any): boolean => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].value === undefined) {
      return false
    }
  }

  return true
}

export const mapRowData = (data: number[]): UserData[] => data.map((item) => ({ value: item }))

export const mapData = (data: UserData[]): PieSlices => {
  const sum = data.reduce((accumulator: number, item: number | UserData) =>
    typeof item === 'number' ? accumulator + item : accumulator + item.value, 0)

  return data.reduce((accumulator: PieSlices, item: UserData, index: number) => {
    const angle = item.value / sum * 2 * pi
    const previousValue = accumulator[index - 1]
    const startAngle = previousValue !== undefined ? previousValue.endAngle : 0
    const endAngle = previousValue !== undefined ? previousValue.endAngle + angle : angle
    const middleAngle = getMiddleAngle(startAngle, endAngle)

    return [
      ...accumulator,
      {
        color: item.color ?? defaultColors[index % defaultColors.length],
        endAngle,
        index,
        label: item.label,
        middleAngle,
        moved: false,
        percentageValue: item.value / sum,
        startAngle,
        value: item.value
      }
    ]
  }, [])
}

export const moveElement = (startAngle: number, mappedData: PieSlices): PieSlices => mappedData.map((element) =>
  element.startAngle === startAngle ? { ...element, moved: !element.moved } : element)

export const createElementPieces = (data: PieSlices): [PieSlices, PieSlices, PieSlices, PieSlices, PieSlices] => {
  const p1Elements = []
  const p2Elements = []
  const p3Elements = []
  const p4Elements = []
  const exceptionElements = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].endAngle < pi / 2) {
      p1Elements.push(data[i])
    } else if (data[i].endAngle >= pi / 2 && data[i].endAngle <= pi) {
      p2Elements.push(data[i])
    } else if (data[i].endAngle > pi && data[i].endAngle <= 3 / 2 * pi) {
      p3Elements.push(data[i])
    } else if (data[i].endAngle > 3 / 2 * pi && data[i].startAngle > pi / 2) {
      p4Elements.push(data[i])
    } else if (data[i].endAngle > 3 / 2 * pi && data[i].startAngle <= pi / 2) {
      exceptionElements.push(data[i])
    }
  }

  return [p1Elements, p2Elements, p3Elements, p4Elements, exceptionElements]
}

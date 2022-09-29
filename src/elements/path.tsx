import React from 'react'

import { PathType, PieData } from '../types'
import {
  calculateNewPosition,
  createEndWallPath,
  createInnerPath,
  createOuterPath,
  createStartWallPath,
  createTopPath
} from '../utils'

type Props = {
  data: PieData
  pathVariables: {
    height: number
    ir: number
    moveDistance: number
    moveElement: (startAngle: number) => void
    showTooltips: boolean
    stroke: string
    strokeWidth: number
    onClick: (index: number) => void
    rx: number
    ry: number
    tooltipShowName: boolean
    tooltipShowPercentage: boolean
    tooltipShowValue: boolean
  }
  type: PathType
}

export const Path =
  ({
    data,
    pathVariables: {
      onClick,
      rx,
      ry,
      height,
      ir,
      moveDistance,
      moveElement,
      showTooltips,
      stroke,
      strokeWidth,
      tooltipShowName,
      tooltipShowPercentage,
      tooltipShowValue
    },
    type
  }: Props): JSX.Element => {
    const handleOnClick = (): void => {
      moveElement(data.startAngle)
      onClick(data.index)
    }

    const createPath = (): string => {
      switch (type) {
        case PathType.End:
          return createEndWallPath(data, rx, ry, height, ir)
        case PathType.Inner:
          return createInnerPath(data, rx, ry, height, ir)
        case PathType.Outer:
          return createOuterPath(data, rx, ry, height)
        case PathType.Start:
          return createStartWallPath(data, rx, ry, height, ir)
        case PathType.Top:
          return createTopPath(data, rx, ry, ir)
        default:
          throw Error('No such path type')
      }
    }

    const styles = { fill: data.color, cursor: 'pointer' }
    const label = data.label !== undefined ? data.label : ''

    const tooltipName = tooltipShowName && label !== undefined ? `${label} ` : ''

    const tooltipText = `${tooltipName}${tooltipShowValue ? data.value : ''} ` +
    `${tooltipShowPercentage ? (data.percentageValue * 100).toFixed(2) + '%' : ''}`

    const transformation = data.moved
      ? `translate(${calculateNewPosition(data, rx, ry, moveDistance).join(',')})`
      : 'translate(0,0)'

    return (
      <path
        d={createPath()}
        onClick={handleOnClick}
        stroke={stroke}
        strokeWidth={strokeWidth}
        style={styles}
        transform={transformation}
      >
        {showTooltips && <title className="chart-tooltip">{tooltipText}</title>}
      </path>
    )
  }

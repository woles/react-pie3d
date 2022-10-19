import React from 'react'

import { PathType, PieSlice } from '../types'
import {
  createEndWallPath,
  createInnerPath,
  createOuterPath,
  createStartWallPath,
  createTopPath,
  getNewPosition
} from '../utils'

type Props = {
  data: PieSlice
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
        case 'end':
          return createEndWallPath(data.endAngle, rx, ry, height, ir)
        case 'inner':
          return createInnerPath(data.startAngle, data.endAngle, rx, ry, height, ir)
        case 'outer':
          return createOuterPath(data.startAngle, data.endAngle, rx, ry, height)
        case 'start':
          return createStartWallPath(data.startAngle, rx, ry, height, ir)
        case 'top':
          return createTopPath(data.startAngle, data.endAngle, rx, ry, ir)
        default:
          throw Error('No such path type')
      }
    }

    const styles = { fill: data.color, cursor: 'pointer' }
    const label = data.label !== undefined ? data.label : ''

    const tooltipName = tooltipShowName && label !== undefined ? `${label} ` : ''

    const tooltipText = `${tooltipName}${tooltipShowValue ? `:\n${data.value}` : ''}` +
    `${tooltipShowPercentage ? `:\n${(data.percentageValue * 100).toFixed(2)}%` : ''}`

    const transformation = data.moved
      ? `translate(${getNewPosition(data.middleAngle, rx, ry, moveDistance).join(',')})`
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

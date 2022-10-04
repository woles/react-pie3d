import React from 'react'

import { PieSlice } from '../types'
import { createLabelPath, getNewPosition } from '../utils'

type Props = {
  data: PieSlice
  chartHight: number
  chartWidth: number
  pathVariables: {
    height: number
    ir: number
    moveDistance: number
    rx: number
    ry: number
  }
}

export const Label = ({ data, chartHight, pathVariables: { height, rx, ry, moveDistance } }: Props):
JSX.Element => {
  const transformation = data.moved
    ? `translate(${getNewPosition(data.middleAngle, rx, ry, moveDistance).join(',')})`
    : 'translate(0,0)'

  return (
    <g>
      <path
        d={createLabelPath(data.middleAngle, rx, ry, height, chartHight)}
        stroke="black"
        strokeWidth="1"
        fill='none'
        transform={transformation}
      />
    </g>
  )
}

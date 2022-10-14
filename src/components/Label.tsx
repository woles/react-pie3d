import React from 'react'

import { PieSlice } from '../types'
import { createLabelPath } from '../utils'

type Props = {
  data: PieSlice
  chartWidth: number
  isLabelRight: boolean
  pathVariables: {
    height: number
    ir: number
    moveDistance: number
    rx: number
    ry: number
  }
}

export const Label = ({ data, isLabelRight, pathVariables: { height, rx, ry, moveDistance } }: Props):
JSX.Element => (
    <g>
      <path
        d={createLabelPath(data.middleAngle, rx, ry, height, isLabelRight)}
        stroke="black"
        strokeWidth="1"
        fill='none'
      />
    </g>
)

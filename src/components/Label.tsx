import React from 'react'

import { PieSlice } from '../types'
import { createLabelPath, getTextWidth } from '../utils'

type Props = {
  data: PieSlice
  chartWidth: number
  textSize: number
  showLabelPercentage: boolean
  pathVariables: {
    height: number
    ir: number
    fixed: number
    moveDistance: number
    rx: number
    ry: number
  }
}

export const Label = ({ data, pathVariables: { height, rx, ry, fixed }, textSize, showLabelPercentage }: Props):
JSX.Element => {
  const value = (data.percentageValue * 100).toFixed(fixed)
  const text = `${data.label ?? ''}${showLabelPercentage ? `(${value}%)` : ''}`
  const { path, x, y } =
    createLabelPath(data.middleAngle, rx, ry, height, getTextWidth(text, textSize), textSize)

  return (
    <g>
      <path
        d={path}
        stroke="black"
        strokeWidth="1"
        fill='none'
      />
      <text x={x} y={y} fontSize={textSize}>{text}</text>
    </g>
  )
}

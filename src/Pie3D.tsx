import React, { useEffect, useRef, useState } from 'react'

import { Label } from './components/Label'
import { Path } from './components/Path'
import { defaultConfig, pi } from './const'
import { Config, Data, PieConfig, UserData } from './types'
import { checkIsDataArrayOfNumbers, checkIsUserData, mapData, mapRowData } from './utils'

const styles = {
  height: '100%',
  width: '100%'
}

type ReactHTMLDivElement = {
  clientHeight: number
  clientWidth: number
}

type Props = {
  config: Config
  data: Data
}

export const Pie3D: React.ElementType = ({ config, data }: Props) => {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [rx, setRx] = useState(0)
  const [mappedData, setMappedData] =
    useState(checkIsDataArrayOfNumbers(data) ? mapData(mapRowData(data as number[])) : mapData(data as UserData[]))

  if (!checkIsDataArrayOfNumbers(data)) {
    if (!checkIsUserData(data)) {
      throw new Error('Wrong data format')
    }
  }

  const pieConfig: PieConfig = { ...defaultConfig, ...config }

  const ref = useRef<ReactHTMLDivElement>(null)

  useEffect(() => {
    if (ref.current != null) {
      setHeight(ref.current.clientHeight)
      setWidth(ref.current.clientWidth)
      setRx(height / 2 * pieConfig.size)
    }
  })

  if (!Array.isArray(data)) {
    throw new Error('Prop data should be an array')
  }

  const moveElement = (startAngle: number): void => setMappedData(mappedData.map((element) =>
    element.startAngle === startAngle ? { ...element, moved: !element.moved } : element))

  const ry = rx * pieConfig.angle / 90

  const pathVariables = {
    moveElement,
    rx,
    ry,
    ...pieConfig
  }

  // eslint-disable-next-line no-console
  console.log(mappedData)

  const mappedTopAndLabelElements = mappedData.map((item, index) =>
    <g key={index}>
      <Label data={item} pathVariables={pathVariables} chartHight={height} chartWidth={width} />
      <Path data={item} pathVariables={pathVariables} type={'top'} />
    </g>
  )

  const mappedP1Elements = mappedData.map((item, index) => rx > 0 && item.endAngle < pi / 2 && (
    <g key={index}>
      <Path data={item} pathVariables={pathVariables} type="start" />
      <Path data={item} pathVariables={pathVariables} type="end" />
      <Path data={item} pathVariables={pathVariables} type="outer" />
    </g>
  ))

  const mappedP2Elements = mappedData
    .sort((a, b) => b.startAngle - a.startAngle)
    .map((item, index) => rx > 0 && item.endAngle >= pi / 2 && item.endAngle <= pi && (
      <g key={index}>
        <Path data={item} pathVariables={pathVariables} type="end" />
        <Path data={item} pathVariables={pathVariables} type="start" />
        <Path data={item} pathVariables={pathVariables} type="outer" />
      </g>
    ))

  const mappedP3Elements = mappedData
    .sort((a, b) => b.startAngle - a.startAngle)
    .map((item, index) => rx > 0 && item.endAngle > pi && item.endAngle <= 3 * pi / 2 && (
      <g key={index}>
        <Path data={item} pathVariables={pathVariables} type="end" />
        {item.startAngle > pi && <Path data={item} pathVariables={pathVariables} type="start" />}
        <Path data={item} pathVariables={pathVariables} type="inner" />
        {item.startAngle <= pi && <Path data={item} pathVariables={pathVariables} type="start" />}
        {item.startAngle < pi && <Path data={item} pathVariables={pathVariables} type="outer" />}
      </g>
    ))

  const mappedP4Elements = mappedData
    .sort((a, b) => a.startAngle - b.startAngle)
    .map((item, index) =>
      rx > 0 && item.endAngle > 3 * pi / 2 && item.startAngle > pi / 2 && (
        <g key={index}>
          <Path data={item} pathVariables={pathVariables} type="start" />
          <Path data={item} pathVariables={pathVariables} type="end" />
          <Path data={item} pathVariables={pathVariables} type="inner" />
          {item.startAngle < pi && <Path data={item} pathVariables={pathVariables} type="outer" />}
        </g>
      ))

  const exception1 = mappedData.map((item, index) => rx > 0 &&
    item.endAngle > 3 * pi / 2 && item.startAngle <= pi / 2 && (
    <g key={index}>
      <Path data={item} pathVariables={pathVariables} type="end" />
    </g>
  ))

  const exception2 = mappedData.map((item, index) => rx > 0 &&
    item.endAngle > 3 * pi / 2 && item.startAngle <= pi / 2 && (
    <g key={index}>
      <Path data={item} pathVariables={pathVariables} type="start" />
      <Path data={item} pathVariables={pathVariables} type="inner" />
      {item.startAngle < pi && <Path data={item} pathVariables={pathVariables} type="outer" />}
    </g>
  ))

  return (
    <svg ref={ref} style={styles}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {exception1}
        {mappedP4Elements}
        {mappedP1Elements}
        {mappedP3Elements}
        {mappedP2Elements}
        {exception2}
        {mappedTopAndLabelElements}
      </g>
    </svg>
  )
}

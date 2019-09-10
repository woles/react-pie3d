import React, { useEffect, useRef, useState } from 'react'

import { DEFAULT_CONFIG } from './const'
import { Path } from './elements'
import { Config, Data, PathType, PieConfig, UserData } from './types'
import { mapData, mapRawData } from './utils'

const styles = {
  height: '100%',
  width: '100%',
}

// We don't use react-dom so HTMLDivElement is empty by default
type ReactHTMLDivElement = {
  clientHeight: number,
  clientWidth: number,
}

const PI = Math.PI

export const Pie3D: React.SFC<{config: Config, data: Data}> = ({config, data}) => {

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [rx, setRx] = useState(0)
  const [mappedData, setMappedData] =
    useState(typeof data[0] === 'number' ? mapRawData(data as number[]) : mapData(data as UserData[]))

  const pieConfig: PieConfig = { ...DEFAULT_CONFIG, ...config }

  const ref = useRef<ReactHTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight)
      setWidth(ref.current.clientWidth)
      setRx(height / 2 * pieConfig.size)
    }
  })

  const moveElement = (startAngle: number) => setMappedData(mappedData.map((element) =>
    element.startAngle === startAngle ? {...element, moved: !element.moved} : element))

  const ry = rx * pieConfig.angle / 90

  const pathVariables = {
    moveElement,
    rx,
    ry,
    ...pieConfig,
  }

  const mappedTopAndLabelElements = mappedData.map((item, index) =>
    <Path data={item} key={index} pathVariables={pathVariables} type={PathType.Top} />)

  const mappedP1Elements = mappedData.map((item, index) => rx && item.endAngle < PI / 2 && (
    <g key={index}>
      <Path data={item} pathVariables={pathVariables} type={PathType.Start} />
      <Path data={item} pathVariables={pathVariables} type={PathType.End} />
      <Path data={item} pathVariables={pathVariables} type={PathType.Outer} />
    </g>
  ))

  const mappedP2Elements = mappedData
    .sort((a, b) => b.startAngle - a.startAngle)
    .map((item, index) => rx && item.endAngle >= PI / 2 && item.endAngle <= PI && (
      <g key={index}>
        <Path data={item} pathVariables={pathVariables} type={PathType.End} />
        <Path data={item} pathVariables={pathVariables} type={PathType.Start} />
        <Path data={item} pathVariables={pathVariables} type={PathType.Outer} />
      </g>
    ))

  const mappedP3Elements = mappedData
    .sort((a, b) => b.startAngle - a.startAngle)
    .map((item, index) => rx && item.endAngle > PI && item.endAngle <= 3 * PI / 2 && (
      <g key={index}>
        <Path data={item} pathVariables={pathVariables} type={PathType.End} />
        {item.startAngle > PI && <Path data={item} pathVariables={pathVariables} type={PathType.Start} />}
        <Path data={item} pathVariables={pathVariables} type={PathType.Inner} />
        {item.startAngle <= PI && <Path data={item} pathVariables={pathVariables} type={PathType.Start} />}
        {item.startAngle < PI && <Path data={item} pathVariables={pathVariables} type={PathType.Outer} />}
      </g>
    ))

  const mappedP4Elements = mappedData
    .sort((a, b) => a.startAngle - b.startAngle)
    .map((item, index) =>
      rx && item.endAngle > 3 * PI / 2 && item.startAngle > PI / 2 && (
        <g key={index}>
          <Path data={item} pathVariables={pathVariables} type={PathType.Start} />
          <Path data={item} pathVariables={pathVariables} type={PathType.End} />
          <Path data={item} pathVariables={pathVariables} type={PathType.Inner} />
          {item.startAngle < PI && <Path data={item} pathVariables={pathVariables} type={PathType.Outer} />}
        </g>
    ))

  const exception1 = mappedData.map((item, index) => rx && item.endAngle > 3 * PI / 2 && item.startAngle <= PI / 2 && (
    <g key={index}>
      <Path data={item} pathVariables={pathVariables} type={PathType.End} />
    </g>
  ))

  const exception2 = mappedData.map((item, index) => rx && item.endAngle > 3 * PI / 2 && item.startAngle <= PI / 2 && (
    <g key={index}>
      <Path data={item} pathVariables={pathVariables} type={PathType.Start} />
      <Path data={item} pathVariables={pathVariables} type={PathType.Inner} />
      {item.startAngle < PI && <Path data={item} pathVariables={pathVariables} type={PathType.Outer} />}
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

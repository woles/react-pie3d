import React, { useEffect, useRef, useState } from 'react'

import { Label } from './components/Label'
import { Path } from './components/Path'
import { defaultConfig, pi } from './const'
import { Config, Data, PieConfig, UserData } from './types'
import { checkIsDataArrayOfNumbers, checkIsUserData, createElementPieces, mapData, mapRowData } from './utils'

const styles = {
  height: '100%',
  width: '100%'
}

type ReactHTMLDivElement = {
  clientHeight: number
  clientWidth: number
}

type Props = {
  config?: Config
  data: Data
}

export const Pie3D: React.ElementType<Props> = ({ config, data }: Props) => {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [rx, setRx] = useState(0)
  const [mappedData, setMappedData] = useState(mapData([]))

  if (!checkIsDataArrayOfNumbers(data)) {
    if (!checkIsUserData(data)) {
      throw new Error('Wrong data format')
    }
  }

  const pieConfig: PieConfig = { ...defaultConfig, ...config }

  const ref = useRef<ReactHTMLDivElement>(null)

  useEffect(() => {
    setMappedData(checkIsDataArrayOfNumbers(data) ? mapData(mapRowData(data as number[])) : mapData(data as UserData[]))
  }, [data])

  useEffect(() => {
    if (ref.current !== null) {
      setHeight(ref.current.clientHeight)
      setWidth(ref.current.clientWidth)
    }
    setRx(height / 2 * pieConfig.size)
  }, [ref.current, pieConfig])

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

  const [p1Elements, p2Elements, p3Elements, p4Elements, exceptionElements] = createElementPieces(mappedData)

  const mappedTopAndLabelElements = mappedData.map((item) =>
    <g key={item.middleAngle}>
      <Path data={item} pathVariables={pathVariables} type={'top'} />
    </g>
  )

  const mappedP1Elements = p1Elements.map((item) => (
    <g key={item.middleAngle}>
      <Path data={item} pathVariables={pathVariables} type="start" />
      <Path data={item} pathVariables={pathVariables} type="end" />
      <Path data={item} pathVariables={pathVariables} type="outer" />
      <Label
        data={item}
        pathVariables={pathVariables}
        chartWidth={width}
        isLabelRight={true}
      />
    </g>
  ))

  const mappedP2Elements = p2Elements
    .sort((a, b) => b.startAngle - a.startAngle)
    .map((item) => (
      <g key={item.middleAngle}>
        <Path data={item} pathVariables={pathVariables} type="end" />
        <Path data={item} pathVariables={pathVariables} type="start" />
        <Path data={item} pathVariables={pathVariables} type="outer" />
        <Label
            data={item}
            pathVariables={pathVariables}
            chartWidth={width}
            isLabelRight={false}
          />
      </g>
    ))

  const mappedP3Elements = p3Elements
    .sort((a, b) => b.startAngle - a.startAngle)
    .map((item) => (
      <g key={item.middleAngle}>
        <Path data={item} pathVariables={pathVariables} type="end" />
        {item.startAngle > pi && <Path data={item} pathVariables={pathVariables} type="start" />}
        <Path data={item} pathVariables={pathVariables} type="inner" />
        {item.startAngle <= pi && <Path data={item} pathVariables={pathVariables} type="start" />}
        {item.startAngle < pi && <Path data={item} pathVariables={pathVariables} type="outer" />}
        <Label
            data={item}
            pathVariables={pathVariables}
            chartWidth={width}
            isLabelRight={false}
          />
      </g>
    ))

  const mappedP4Elements = p4Elements
    .sort((a, b) => a.startAngle - b.startAngle)
    .map((item) => (
        <g key={item.middleAngle}>
          <Path data={item} pathVariables={pathVariables} type="start" />
          <Path data={item} pathVariables={pathVariables} type="end" />
          <Path data={item} pathVariables={pathVariables} type="inner" />
          {item.startAngle < pi && <Path data={item} pathVariables={pathVariables} type="outer" />}
          <Label
            data={item}
            pathVariables={pathVariables}
            chartWidth={width}
            isLabelRight={true}
          />
        </g>
    ))

  const exception = exceptionElements.map((item) => (
    <g key={item.middleAngle}>
      <Path data={item} pathVariables={pathVariables} type="end" />
      <Path data={item} pathVariables={pathVariables} type="start" />
      <Path data={item} pathVariables={pathVariables} type="inner" />
      {item.startAngle < pi && <Path data={item} pathVariables={pathVariables} type="outer" />}
      <Label
        data={item}
        pathVariables={pathVariables}
        chartWidth={width}
        isLabelRight={true}
      />
    </g>
  ))

  return (
    <svg ref={ref} style={styles}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {exception}
        {mappedP4Elements}
        {mappedP1Elements}
        {mappedP3Elements}
        {mappedP2Elements}
        {mappedTopAndLabelElements}
      </g>
    </svg>
  )
}

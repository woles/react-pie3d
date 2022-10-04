import React, { useEffect, useRef, useState } from 'react'

// import { Label } from './components/Label'
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
  config: Config
  data: Data
}

let render = 0

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

  render += 1

  const pieConfig: PieConfig = { ...defaultConfig, ...config }

  const ref = useRef<ReactHTMLDivElement>(null)

  useEffect(() => {
    if (ref.current !== null) {
      setHeight(ref.current.clientHeight)
      setWidth(ref.current.clientWidth)
    }
    setRx(height / 2 * pieConfig.size)
  }, [ref.current])

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
  console.log(render)

  const [p1Elements, p2Elements, p3Elements, p4Elements, exceptionElements] = createElementPieces(mappedData)

  const mappedTopAndLabelElements = mappedData.map((item, index) =>
    <g key={index}>
      {/* <Label
        data={item}
        pathVariables={pathVariables}
        distance={height / (isLabelRight(item.middleAngle) ? rightLabelsNumber : leftLabelsNumber) }
        chartWidth={width} /> */}
      <Path data={item} pathVariables={pathVariables} type={'top'} />
    </g>
  )

  const mappedP1Elements = p1Elements.map((item) => (
    <g key={item.value}>
      <Path data={item} pathVariables={pathVariables} type="start" />
      <Path data={item} pathVariables={pathVariables} type="end" />
      <Path data={item} pathVariables={pathVariables} type="outer" />
    </g>
  ))

  const mappedP2Elements = p2Elements
    .sort((a, b) => b.startAngle - a.startAngle)
    .map((item) => (
      <g key={item.value}>
        <Path data={item} pathVariables={pathVariables} type="end" />
        <Path data={item} pathVariables={pathVariables} type="start" />
        <Path data={item} pathVariables={pathVariables} type="outer" />
      </g>
    ))

  const mappedP3Elements = p3Elements
    .sort((a, b) => b.startAngle - a.startAngle)
    .map((item) => (
      <g key={item.value}>
        <Path data={item} pathVariables={pathVariables} type="end" />
        {item.startAngle > pi && <Path data={item} pathVariables={pathVariables} type="start" />}
        <Path data={item} pathVariables={pathVariables} type="inner" />
        {item.startAngle <= pi && <Path data={item} pathVariables={pathVariables} type="start" />}
        {item.startAngle < pi && <Path data={item} pathVariables={pathVariables} type="outer" />}
      </g>
    ))

  const mappedP4Elements = p4Elements
    .sort((a, b) => a.startAngle - b.startAngle)
    .map((item) => (
        <g key={item.value}>
          <Path data={item} pathVariables={pathVariables} type="start" />
          <Path data={item} pathVariables={pathVariables} type="end" />
          <Path data={item} pathVariables={pathVariables} type="inner" />
          {item.startAngle < pi && <Path data={item} pathVariables={pathVariables} type="outer" />}
        </g>
    ))

  const exception1 = exceptionElements.map((item) => (
    <g key={item.value}>
      <Path data={item} pathVariables={pathVariables} type="end" />
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
        {mappedTopAndLabelElements}
      </g>
    </svg>
  )
}

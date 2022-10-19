import * as React from 'react'
import { Pie3D } from 'react-pie3d'

import { ChartContext } from '../Context'

export const Chart = () => {
  const { state: { config, data } } = React.useContext(ChartContext)

  return (
    <Pie3D config={config} data={data}/>
  )
}

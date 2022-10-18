import * as React from 'react'
import { Pie3D } from 'react-pie3d'

import { ChartContext } from '../Context'

export const Chart = () => {
  const { state } = React.useContext(ChartContext)

  return (
    <Pie3D config={state.config} data={state.data}/>
  )
}

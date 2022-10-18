import * as React from 'react'
import { Pie3D } from 'react-pie3d'

export type Chart = React.ComponentProps<typeof Pie3D>
export type UserData = {
  value: number
  color?: string
  label?: string
}
export type ChartContextType = {
  data: UserData[]
  config: Chart['config']
}

export type ActionsMap = {
  addData: number
  updateConfig: ChartContextType['config']
  updateAngle: number
  updateDataColor: {
    index: number
    color: string
  }
  updateDataValue: {
    index: number
    value: number
  }
  updateDataLabel: {
    index: number
    label: string
  }
  updateHight: number
  updateIR: number
  updateSize: number
  updateData: ChartContextType['data']
}
  
export type Actions = {
[Key in keyof ActionsMap]: {
  type: Key;
  payload: ActionsMap[Key];
}
}[keyof ActionsMap]
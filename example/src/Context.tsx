import * as React from 'react'

import { defaultConfig, defaultData, defaultColors } from './const'
import { ChartContextType, Actions } from './types'

const defaultState = {
  config: defaultConfig,
  data: defaultData
}

type AppContext = {
  state: ChartContextType
  dispatch: React.Dispatch<Actions>
}

export const ChartContext = React.createContext<AppContext>({
  dispatch: () => {},
  state: defaultState,
})

const newData = (length: number)  => ({
  value: 10,
  color: defaultColors[length % defaultColors.length],
  label: 'new fruit'
})

const chartReducer = (state: ChartContextType, { payload, type }: Actions) => {
  switch (type) {
    case 'deleteData':
      return {
        ...state,
        data: state.data.filter((_, index) => index !== payload)
      }
    case 'toggleTooltip':
      return {
        ...state,
        config: {
          ...state.config,
          showTooltips: !state?.config?.showTooltips
        }
      }
    case 'toggleTooltipLabel':
      return {
        ...state,
        config: {
          ...state.config,
          tooltipShowName: !state?.config?.tooltipShowName
        }
      }
    case 'toggleTooltipPercentage':
      return {
        ...state,
        config: {
          ...state.config,
          tooltipShowPercentage: !state?.config?.tooltipShowPercentage
        }
      }
    case 'toggleTooltipValue':
      return {
        ...state,
        config: {
          ...state.config,
          tooltipShowValue: !state?.config?.tooltipShowValue
        }
      }
    case 'updateConfig': 
      return {
        ...state,
        config: payload
      }
    case 'updateData': 
      return {
        ...state,
        data: payload
      }
    case 'updateAngle':
      return {
        ...state,
        config: {
          ...state.config,
          angle: payload
        }
      }
    case 'updateDataColor':
      return {
        ...state,
        data: state.data.map((item, index) => index === payload.index ? { ...item, color: payload.color } : item)
      }
    case 'updateDataLabel':
      return {
        ...state,
        data: state.data.map((item, index) => index === payload.index ? { ...item, label: payload.label } : item)
      }
    case 'updateDataValue':
      return {
        ...state,
        data: state.data.map((item, index) => index === payload.index ? { ...item, value: payload.value } : item)
      }
    case 'updateHight':
      return {
        ...state,
        config: {
          ...state.config,
          height: payload
        }
      }
    case 'updateIR':
      return {
        ...state,
        config: {
          ...state.config,
          ir: payload
        }
      }
    case 'updateStrokeWidth':
      return {
        ...state,
        config: {
          ...state.config,
          strokeWidth: payload
        }
      }
    case 'updateStrokeColor':
      return {
        ...state,
        config: {
          ...state.config,
          stroke: payload
        }
      }
    case 'updateSize':
      return {
        ...state,
        config: {
          ...state.config,
          size: payload
        }
      }
    case 'addData':
      return {
        ...state,
        data: [...state.data, newData(state.data.length)]
      }
    default:
      throw new Error(`Unhandled action type`)
  }
}

export const ChartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(chartReducer, defaultState)
  const value = { state, dispatch }

  return <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
}

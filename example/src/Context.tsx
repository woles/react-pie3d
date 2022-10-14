import * as React from 'react'

const ChartContext = React.createContext()

function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + 1}
    }
    case 'decrement': {
      return {count: state.count - 1}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const ChartProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(countReducer, {count: 0})
  const value = { state, dispatch }

  return <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
}

import * as React from 'react'
import { HuePicker } from 'react-color'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import { ChartContext } from '../Context'

type Props = {
  index: number
  value: number
  color?: string
  label?: string
}

export const DataFormItem = ({ color, value, label, index }: Props) => {
  const { dispatch } = React.useContext(ChartContext)

  return (
    <Grid container spacing={2} style={{ paddingTop: 10 }}>
      <Grid item xs={2}>
        <TextField
          type="number"
          value={value}
          label="Value"
          onChange={(event) => dispatch({ type: 'updateDataValue', payload: { index, value: Number((event.target as HTMLInputElement).value) } })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
            style={{ width: '100%' }}
            value={label}
            label="Label  "
            onChange={(event) => dispatch({ type: 'updateDataLabel', payload: { index, label: (event.target as HTMLInputElement).value } })}
          />
      </Grid>
      <Grid item xs={4}>
        <HuePicker
          style={{ width: '90%' }}
          color={color}
          onChangeComplete={(value) => dispatch({ type: 'updateDataColor', payload: { index, color: value.hex } })}
        />
      </Grid>
    </Grid>
  )
} 
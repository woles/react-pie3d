import * as React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import { ChartContext } from '../Context'

type Props = {
  index: number
  value: number
  color?: string
  label?: string
}

export const DataFormItem = ({ value, index }: Props) => {
  const { dispatch } = React.useContext(ChartContext)

  return (
    <Grid container spacing={2} style={{ paddingTop: 10 }}>
      <Grid item xs={4}>
        <TextField
          type="number"
          value={value}
          label="Value"
          onChange={(event) => dispatch({ type: 'updateDataValue', payload: { index, value: Number((event.target as HTMLInputElement).value) } })}
        />
      </Grid>
    </Grid>
  )
} 
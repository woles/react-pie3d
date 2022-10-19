import * as React from 'react'
import { HuePicker } from 'react-color'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'

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
    <Grid container spacing={2} style={{ paddingTop: 10 }} alignItems="center">
      <Grid item xs={2}>
        <TextField
          type="number"
          value={value}
          label="Value"
          onChange={(event) => dispatch({
            type: 'updateDataValue',
            payload: { index, value: Number((event.target as HTMLInputElement).value) } }
          )}
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
            style={{ width: '100%' }}
            value={label}
            label="Label  "
            onChange={(event) => dispatch({
              type: 'updateDataLabel',
              payload: { index, label: (event.target as HTMLInputElement).value } }
            )}
          />
      </Grid>
      <Grid item xs={4}>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="20"
          >
            <HuePicker
              color={color}
              onChange={(value) => dispatch({ type: 'updateDataColor', payload: { index, color: value.hex } })}
            />
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="20"
        >
          <IconButton
              size="small"
              onClick={() => dispatch({ type: 'deleteData', payload: index })}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
      </Grid>
    </Grid>
  )
} 
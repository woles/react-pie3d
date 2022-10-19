import * as React from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'

import { ChartContext } from '../Context'
import { DataFormItem } from './DataFormItem'

export const DataForm = (): JSX.Element => {
  const { dispatch, state: { data } } = React.useContext(ChartContext)

  return (
    <Card style={{ marginTop: 20 }}>
      <CardContent>
        <form>
          {data.map(({ value, label, color }, index) => (
              <DataFormItem key={index} value={value} color={color} label={label} index={index} />
          ))}
        </form>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="20"
        >
          <Fab
            color="primary"
            aria-label="add"
            style={{ marginTop: 20 }}
            onClick={() => dispatch({ type: 'addData', payload: 0 })}
          >
            <AddIcon />
          </Fab>
        </Box>
      </CardContent>
    </Card>
  )
} 
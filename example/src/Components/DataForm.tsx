import * as React from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { ChartContext } from '../Context'
import { DataFormItem } from './DataFormItem'

export const DataForm = (): JSX.Element => {
  const { dispatch, state: { data } } = React.useContext(ChartContext)

  return (
    <Card style={{ marginTop: 20 }}>
      <CardContent>
        <form>
          {data.map((item, index) => (
              <DataFormItem key={index} value={item.value} index={index} />
          ))}
        </form>
        <Fab color="primary" aria-label="add" style={{ marginTop: 20 }} onClick={() => dispatch({ type: 'addData', payload: 0 })}>
          <AddIcon />
        </Fab>
      </CardContent>
    </Card>
  )
} 
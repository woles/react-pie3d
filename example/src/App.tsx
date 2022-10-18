import * as React from 'react'
import Grid from '@mui/material/Grid'

import { ChartProvider } from './Context'
import { Chart } from './Components/Chart'
import { ConfigForm } from './Components/ConfigForm'
import { DataForm } from './Components/DataForm'


function App() {
  return (
    <ChartProvider>
      <Grid container spacing="2">
        <Grid item xs={6}>
          <div style={{ height: '100vh' }}>
            <Chart />
          </div>
        </Grid>
        <Grid item xs={6}>
          <ConfigForm />
          <DataForm />
        </Grid>
      </Grid>
    </ChartProvider>
  )
}

export default App

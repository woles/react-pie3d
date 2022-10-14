import * as React from 'react'
import { Pie3D } from 'react-pie3d'
import { Grid } from '@mui/material'

function App() {
  return (
    <div className="App" style={{ width: '100vh', height: '100vh' }}>
      <Grid container spacing="2">
        <Grid item xs={6}>
          <Pie3D data={[10,  10, 20, 30, 40, 60, 10,  10, 20, 30, 40, 60, 10, 10, 20, 30, 40, 60, 10,  10, 20, 30, 40, 60, 10, ]}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default App

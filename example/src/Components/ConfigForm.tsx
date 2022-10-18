import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

import { ChartContext } from '../Context'

export const ConfigForm = (): JSX.Element => {
  const { dispatch, state: { config } } = React.useContext(ChartContext)

  return (
    <Card>
      <CardContent>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography id="angle-slider" gutterBottom>
                Angle ({config?.angle}) 
              </Typography>
              <Slider 
                value={config?.angle} 
                min={0} 
                max={90} 
                onChange={(event) => dispatch({ type: 'updateAngle', payload: Number((event.target as HTMLInputElement).value) })} 
              />
              <Typography id="hight-slider" gutterBottom>
                Hight ({config?.height})
              </Typography>
              <Slider 
                value={config?.height} 
                min={0} 
                max={100} 
                onChange={(event) => dispatch({ type: 'updateHight', payload:  Number((event.target as HTMLInputElement).value) })} 
              />
            </Grid>
            <Grid item xs={6}>
              <Typography id="inner-radius-slider" gutterBottom>
                Inner Radius ({config?.ir})
              </Typography>
              <Slider 
                value={config?.ir} 
                min={0} 
                max={1}
                step={0.1}
                onChange={(event) => dispatch({ type: 'updateIR', payload:  Number((event.target as HTMLInputElement).value) })} 
              />
              <Typography id="size-slider" gutterBottom>
                Size ({config?.size})
              </Typography>
              <Slider 
                value={config?.size} 
                min={0.1} 
                max={1}
                step={0.1}
                onChange={(event) => dispatch({ type: 'updateSize', payload:  Number((event.target as HTMLInputElement).value) })} 
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
    )
} 
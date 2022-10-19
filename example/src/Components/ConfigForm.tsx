import * as React from 'react'
import { CompactPicker } from 'react-color'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import FormControlLabel from '@mui/material/FormControlLabel'
import Slider from '@mui/material/Slider'
import Switch from '@mui/material/Switch'
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
                onChange={(event) => dispatch({
                  type: 'updateAngle',
                  payload: Number((event.target as HTMLInputElement).value)
                })} 
              />
              <Typography id="hight-slider" gutterBottom>
                Hight ({config?.height})
              </Typography>
              <Slider 
                value={config?.height} 
                min={0} 
                max={100} 
                onChange={(event) => dispatch({ 
                  type: 'updateHight',
                  payload:  Number((event.target as HTMLInputElement).value) 
                })} 
              />
              <Typography id="stroke-slider" gutterBottom>
                Stroke Width ({config?.strokeWidth})
              </Typography>
              <Slider 
                value={config?.strokeWidth} 
                min={0} 
                max={20} 
                onChange={(event) => dispatch({
                  type: 'updateStrokeWidth',
                  payload:  Number((event.target as HTMLInputElement).value)
                })}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={config?.showTooltips}
                        onChange={() => dispatch({ type: 'toggleTooltip', payload: undefined })} name="tooltip"
                      />
                    }
                    label="Tooltip"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={config?.tooltipShowPercentage}
                        onChange={() => dispatch({ 
                          type: 'toggleTooltipPercentage',
                          payload: undefined })} name="tooltip-percentage"
                      />
                    }
                    label="Tooltip percentage"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={config?.showLabels}
                        onChange={() => dispatch({ type: 'toggleLabels', payload: undefined })} name="labels"
                      />
                    }
                    label="Show Labels"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={config?.tooltipShowName}
                        onChange={() => dispatch({ type: 'toggleTooltipLabel', payload: undefined })} name="tooltip-label"
                      />
                    }
                    label="Tooltip Label"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={config?.tooltipShowValue}
                        onChange={() => dispatch({ type: 'toggleTooltipValue', payload: undefined })} name="tooltip-value"
                      />
                    }
                    label="Tooltip value"
                  />
                </Grid>
              </Grid>
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
                onChange={(event) => dispatch({
                  type: 'updateIR',
                  payload:  Number((event.target as HTMLInputElement).value)
                })} 
              />
              <Typography id="size-slider" gutterBottom>
                Size ({config?.size})
              </Typography>
              <Slider 
                value={config?.size} 
                min={0.1} 
                max={1}
                step={0.1}
                onChange={(event) => dispatch({
                  type: 'updateSize',
                  payload:  Number((event.target as HTMLInputElement).value)
                })} 
              />
              <Typography id="font-size-slider" gutterBottom>
                Font Size ({config?.textSize})
              </Typography>
              <Slider 
                value={config?.textSize} 
                min={1} 
                max={50}
                onChange={(event) => dispatch({
                  type: 'updateTextSize',
                  payload:  Number((event.target as HTMLInputElement).value)
                })} 
              />
              <Typography id="stroke-color-slider" gutterBottom>
                Stroke Color
              </Typography>
              <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CompactPicker
                    color={config?.stroke}
                    onChange={(value) => dispatch({ type: 'updateStrokeColor', payload: value.hex })}
                  />
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
    )
} 
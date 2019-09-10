// tslint:disable: no-submodule-imports
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// tslint:enable: no-submodule-imports
import React, { useState } from 'react'

import { Pie3D } from 'react-pie3d'

import { Form } from './components'

const DATA = [
  { value: 5, label: 'Apples' },
  { value: 8, label: 'Oranges' },
  { value: 3, label: 'Bananas' },
  { value: 5, label: 'Plums' },
  { value: 2, label: 'Pineapples' },
  { value: 3, label: 'Lemons' },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    control: {
      padding: theme.spacing(2),
    },
    paper: {
      height: 500,
      marginTop: 50,
      width: 600,
    },
    root: {
      flexGrow: 1,
    },
  }),
)

const App: React.SFC = () => {

  const [angle, setAngle] = useState(40)
  const [height, setHeight] = useState(40)
  const [ir, setIr] = useState(0.6)
  const [moveDistance, setMoveDistance] = useState(0.2)
  const [showTooltips, setShowTooltips] = useState(true)
  const [size, setSize] = useState(0.8)
  const [strokeWidth, setStrokeWidth] = useState(1)
  const [tooltipShowName, setTooltipShowName] = useState(true)
  const [tooltipShowPercentage, setTooltipShowPercentage] = useState(true)
  const [tooltipShowValue, setTooltipShowValue] = useState(true)
  const [stroke, setStrokeColor] = useState('#fff')

  const classes = useStyles()

  const config = {
    angle,
    height,
    ir,
    moveDistance,
    showTooltips,
    size,
    stroke,
    strokeWidth,
    tooltipShowName,
    tooltipShowPercentage,
    tooltipShowValue,
  }

  return (
    <Grid container={true} className={classes.root} spacing={2}>
      <Grid item={true} xs={12}>
        <Grid container={true} justify="center" spacing={2}>
          <Grid item={true}>
            <Paper className={classes.paper}>
              <Pie3D config={config} data={DATA} />
            </Paper>
          </Grid>
          <Grid item={true}>
            <Paper className={classes.paper}>
              <Form
                config={config}
                setAngle={setAngle}
                setHeight={setHeight}
                setIr={setIr}
                setMoveDistance={setMoveDistance}
                setShowTooltips={setShowTooltips}
                setSize={setSize}
                setStrokeWidth={setStrokeWidth}
                setShowTooltipLabel={setTooltipShowName}
                setShowTooltipValue={setTooltipShowValue}
                setShowTooltipPercentage={setTooltipShowPercentage}
                setStrokeColor={setStrokeColor}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App

// tslint:disable: no-submodule-imports
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Input from '@material-ui/core/Input'
import Slider from '@material-ui/core/Slider'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
// tslint:enable: no-submodule-imports

import React, { ChangeEvent } from 'react'

type FormProps = {
  config: {
    angle?: number,
    height?: number,
    ir?: number,
    moveDistance?: number
    onClick?: (index: number) => void,
    showTooltips?: boolean,
    size?: number,
    stroke?: string,
    strokeWidth?: number,
    tooltipShowName?: boolean,
    tooltipShowPercentage?: boolean,
    tooltipShowValue?: boolean,
  },
  setAngle: (value: number) => void,
  setHeight: (value: number) => void,
  setIr: (value: number) => void,
  setMoveDistance: (value: number) => void,
  setShowTooltips: (value: boolean) => void,
  setSize: (value: number) => void,
  setStrokeWidth: (value: number) => void,
  setShowTooltipLabel: (value: boolean) => void,
  setShowTooltipValue: (value: boolean) => void,
  setShowTooltipPercentage: (value: boolean) => void,
  setStrokeColor: (value: any) => void,
}

const sliderStyle = { marginLeft: 20, width: '90%' }

export const Form: React.SFC<FormProps> = (
  {
    config: {
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
    },
    setAngle,
    setHeight,
    setIr,
    setMoveDistance,
    setShowTooltips,
    setSize,
    setStrokeWidth,
    setShowTooltipLabel,
    setShowTooltipValue,
    setShowTooltipPercentage,
    setStrokeColor,
  }) => {

  const onAngleChange = (event: ChangeEvent<{}>, value: number | number[]) => setAngle(value as number)
  const onHeightChange = (event: ChangeEvent<{}>, value: number | number[]) => setHeight(value as number)
  const onIrChange = (event: ChangeEvent<{}>, value: number | number[]) => setIr(value as number)
  const onMoveDistanceChange = (event: ChangeEvent<{}>, value: number | number[]) => setMoveDistance(value as number)
  const onShowTooltipsChange = () => setShowTooltips(!showTooltips)
  const onSizeChange = (event: ChangeEvent<{}>, value: number | number[]) => setSize(value as number)
  const onStrokeWidthChange = (event: ChangeEvent<{}>, value: number | number[]) => setStrokeWidth(value as number)
  const onShowTooltipLabelChange = () => setShowTooltipLabel(!tooltipShowName)
  const onShowTooltipValueChange = () => setShowTooltipValue(!tooltipShowValue)
  const onShowTooltipPercentageChange = () => setShowTooltipPercentage(!tooltipShowPercentage)
  const onStrokeColorChange = (event: React.ChangeEvent<HTMLInputElement>) => setStrokeColor(event.target.value)

  return (
    <form>
      <div style={sliderStyle}>
        <Typography gutterBottom={true}>
          Angle:
        </Typography>
        <Slider
          defaultValue={angle}
          onChange={onAngleChange}
          step={1}
          marks={true}
          min={0}
          max={90}
          valueLabelDisplay="auto"
        />
      </div>
      <div style={sliderStyle}>
        <Typography gutterBottom={true}>
          Hight:
        </Typography>
        <Slider
          defaultValue={height}
          onChange={onHeightChange}
          step={1}
          marks={true}
          min={0}
          max={90}
          valueLabelDisplay="auto"
        />
      </div>
      <div style={sliderStyle}>
        <Typography gutterBottom={true}>
          IR:
        </Typography>
        <Slider
          defaultValue={ir}
          onChange={onIrChange}
          step={0.05}
          marks={true}
          min={0}
          max={1}
          valueLabelDisplay="auto"
        />
      </div>
      <div style={sliderStyle}>
        <Typography gutterBottom={true}>
          Move Distance:
        </Typography>
        <Slider
          defaultValue={moveDistance}
          onChange={onMoveDistanceChange}
          step={0.05}
          marks={true}
          min={0}
          max={1}
          valueLabelDisplay="auto"
        />
      </div>
      <div style={sliderStyle}>
        <Typography gutterBottom={true}>
          Size:
        </Typography>
        <Slider
          defaultValue={size}
          onChange={onSizeChange}
          step={0.05}
          marks={true}
          min={0}
          max={1}
          valueLabelDisplay="auto"
        />
      </div>
      <div style={sliderStyle}>
        <Typography gutterBottom={true}>
          Stroke Size:
        </Typography>
        <Slider
          defaultValue={strokeWidth}
          onChange={onStrokeWidthChange}
          step={0.05}
          marks={true}
          min={0}
          max={10}
          valueLabelDisplay="auto"
        />
      </div>
      <FormGroup row={true}>
        <FormControlLabel
          control={<Switch checked={showTooltips} onChange={onShowTooltipsChange} color="primary"/>}
          label="Show Tooltips:"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch checked={tooltipShowName} onChange={onShowTooltipLabelChange} color="primary"/>}
          label="Show Tooltip Label:"
          labelPlacement="start"
        />
      </FormGroup>
      <FormGroup row={true}>
        <FormControlLabel
          control={<Switch checked={tooltipShowValue} onChange={onShowTooltipValueChange} color="primary" />}
          label="Show Tooltip Value:"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch checked={tooltipShowPercentage} onChange={onShowTooltipPercentageChange} color="primary"/>}
          label="Show Tooltip Percentage:"
          labelPlacement="start"
        />
      </FormGroup>
      <FormGroup row={true}>
        <FormControlLabel
          control={<Input placeholder="color" value={stroke} onChange={onStrokeColorChange} style={{marginLeft: 15}} />}
          label="Stroke Color:"
          labelPlacement="start"
        />
      </FormGroup>
    </form>
  )
}

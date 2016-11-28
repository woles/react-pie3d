import React from 'react';

import pieData from './math/pieData';
import randomId from './utils/randomId';

import Top from './slice/top';
import Inner from './slice/inner';
import Outer from './slice/outer';
import EndWall from './slice/endWall';
import StartWall from './slice/startWall';
import LabelPath from './slice/labelPath';
import Label from './slice/label';

export default class Pie3D extends React.Component {

  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.shape({
      })
    ])).isRequired,
    config: React.PropTypes.shape({
      onSliceClick: React.PropTypes.function
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      chartId: randomId(10)
    };
  }

  componentDidMount() {
    this.updateConfig();
    window.addEventListener('resize', () => this.updateConfig());
  }

  updateConfig = () => {
    const height = document.getElementById(this.state.chartId).clientHeight;
    this.setState({ height });
    const width = document.getElementById(this.state.chartId).clientWidth;
    this.setState({ width });
    this.rx = height / 2;
    this.ir = 0.6;
    this.h = 40;
    this.angle = 40;
  }

  moved = [];

  move = d => {
    this.moved.indexOf(d.index) > -1 ? delete this.moved[this.moved.indexOf(d.index)] :
      this.moved.push(d.index);
    if (this.props.config) {
      this.props.config.onSliceClick ? this.props.config.onSliceClick(d) : null;
    }
    this.forceUpdate();
  }

  checkMoved = index => this.moved.indexOf(index) >= 0;

  render() {
    const data = pieData(this.props.data);
    let ir = this.ir;
    let rx = this.rx;
    let angle = this.angle;
    let h = 0;
    const config = this.props.config;
    if (config) {
      h = config.h >= 0 ? config.h : this.h;
      ir = config.ir >= 0 && config.ir <= 100 ?
        config.ir / 100 : this.ir;
      angle = config.angle <= 90 && config.angle > 0 ?
        config.angle : this.angle;
      rx = config.size > 0 ? rx * config.size / 100 : rx;
    }
    const ry = rx * angle / 90;
    h = (90 - angle) / 90 * h;
    return (
      <svg style={{ width: '100%', height: '100%' }} id={this.state.chartId}>
        <g transform={`translate(${this.state.width / 2}, ${this.state.height / 2})`}>
          {/* exeption */}
          {data.map(d => {
            if (rx && d.endAngle > 3 * Math.PI / 2 && d.startAngle <= Math.PI / 2) {
              return (
                <g key={d.index}>
                  <EndWall d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                </g>
              );
            }
          })}
          {/* pi4 */}
          {data.map(d => {
            if (rx && d.endAngle > 3 * Math.PI / 2 && d.startAngle > Math.PI / 2) {
              return (
                <g key={d.index}>
                  <StartWall d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  <EndWall d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  <Inner d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  {
                    d.startAngle < Math.PI ?
                      <Outer d={d}
                         rx={rx}
                         ry={ry}
                         h={h}
                         move={this.move}
                         moved={this.checkMoved(d.index)}
                      /> :
                      null
                  }
                </g>
              );
            }
          })}
          {/* pi1 */}
          {data.map(d => {
            if (rx && d.endAngle < Math.PI / 2) {
              return (
                <g key={d.index}>
                  <StartWall d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  <EndWall d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  <Outer d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                </g>
              );
            }
          })}
          {/* pi3 */}
          {data.sort((a, b) => b.index - a.index).map(d => {
            if (rx && d.endAngle > Math.PI && d.endAngle <= 3 * Math.PI / 2) {
              return (
                <g key={d.index}>
                  <EndWall d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  {
                    d.startAngle > Math.PI ?
                      <StartWall d={d}
                         rx={rx}
                         ry={ry}
                         h={h}
                         ir={ir}
                         move={this.move}
                         moved={this.checkMoved(d.index)}
                      /> :
                      null
                  }
                  <Inner d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  {
                    d.startAngle <= Math.PI ?
                      <StartWall d={d}
                         rx={rx}
                         ry={ry}
                         h={h}
                         ir={ir}
                         move={this.move}
                         moved={this.checkMoved(d.index)}
                      /> :
                      null
                  }
                  {d.startAngle < Math.PI ?
                    <Outer d={d}
                       rx={rx}
                       ry={ry}
                       h={h}
                       move={this.move}
                       moved={this.checkMoved(d.index)}
                    /> :
                    null
                  }
                </g>
              );
            }
          })}
          {/* pi2 */}
          {data.sort((a, b) => b.index - a.index).map(d => {
            if (rx && d.endAngle >= Math.PI / 2 && d.endAngle <= Math.PI) {
              return (
                <g key={d.index}>
                  <EndWall d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  <StartWall d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  <Outer d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                </g>
              );
            }
          })}
          {/* Exeption */}
          {data.map(d => {
            if (rx && d.endAngle > 3 * Math.PI / 2 && d.startAngle <= Math.PI / 2) {
              return (
                <g key={d.index}>
                  <StartWall d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  <Inner d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
                  />
                  {
                    d.startAngle < Math.PI ?
                      <Outer d={d}
                         rx={rx}
                         ry={ry}
                         h={h}
                         move={this.move}
                         moved={this.checkMoved(d.index)}
                      /> :
                      null
                  }
                </g>
              );
            }
          })}
          {data.map(d => rx ?
            <Top key={d.index}
                     d={d}
                     rx={rx}
                     ry={ry}
                     ir={ir}
                     move={this.move}
                     moved={this.checkMoved(d.index)}
            />
            : null
          )}
          {data.map(d =>
            rx ?
              <LabelPath key={d.index}
                         d={d} rx={rx}
                         ry={ry} h={h}
                         moved={this.checkMoved(d.index)}
              />
            : null
          )}
          {data.map(d =>
            rx ?
              <Label key={d.index}
                     d={d}
                     rx={rx}
                     ry={ry}
                     h={h}
                     moved={this.checkMoved(d.index)}
              />
            : null
          )}
        </g>
      </svg>
    );
  }
}


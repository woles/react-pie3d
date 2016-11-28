import React from 'react';

import NumericInput from 'react-numeric-input';
import ColorPicker from '../components/ColorPicker';

import Pie3D from '../../src';

import createData from '../utils/data';

export default class App extends React.Component {

  state = {
    data: createData(),
    config: {
      angle: 40,
      h: 40,
      ir: 60,
      size: 100,
      onSliceClick: d => {
        let moved;
        if (this.state.moved.indexOf(d.index) < 0) {
          moved = this.state.moved.push(d.index);
          this.setState(() => moved);
        } else {
          moved = delete this.state.moved[this.state.moved.indexOf(d.index)];
          this.setState(() => moved);
        }
      }
    },
    moved: []
  }

  randomData = () => this.setState({ data: createData() });

  changeLabel = (id, event) => {
    const data = this.state.data;
    data[id].label = event.target.value;
    this.setState(() => data);
  }

  changeValue = (id, value) => {
    const data = this.state.data;
    data[id].value = value;
    this.setState(() => data);
  }

  changeColor = (id, value) => {
    const data = this.state.data;
    data[id].color = value;
    this.setState(() => data);
  }

  addRow = () => {
    const data = this.state.data;
    data.push({
      value: 10,
      color: 'silver',
      label: 'new'
    });
    this.setState(() => data);
  }

  removeRow = () => {
    this.setState({ data: this.state.data.slice(0, this.state.data.length - 1) });
  }

  changeHeight = value => {
    const config = this.state.config;
    config.h = value;
    this.setState(() => config);
  }

  changeIr = value => {
    const config = this.state.config;
    config.ir = value;
    this.setState(() => config);
  }

  changeAngle = value => {
    const config = this.state.config;
    config.angle = value;
    this.setState(() => config);
  }

  changeSize = value => {
    const config = this.state.config;
    config.size = value;
    this.setState(() => config);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" tabIndex="0">
                react-pie3d
              </a>
            </div>
          </div>
        </nav>
        <div className="container-fluid" style={{ backgroundColor: '#e7e7e7' }}>
          <div className="row">
            <div className="col-lg-6">
              <div style={{ width: '100%', height: 450 }}>
                <Pie3D data={this.state.data} config={this.state.config}/>
              </div>
            </div>
            <div className="col-lg-3">
              <h2>Config:</h2>
              <div className="form-row">
                <label htmlFor="height">Height:</label>
                <span style={{ float: 'right', marginRight: 50 }}>
                  <NumericInput min={0}
                                max={200}
                                value={this.state.config.h}
                                onChange={this.changeHeight}
                                id="height"
                  />px
                </span>
              </div>
              <div className="form-row">
                <label htmlFor="ir">Inner Radius:</label>
                <span style={{ float: 'right', marginRight: 50 }}>
                  <NumericInput min={0}
                                max={100}
                                value={this.state.config.ir}
                                onChange={this.changeIr}
                                id="ir"
                  />%
                </span>
              </div>
              <div className="form-row">
                <label htmlFor="angle">Angle:</label>
                <span style={{ float: 'right', marginRight: 50 }}>
                  <NumericInput min={1}
                                max={90}
                                value={this.state.config.angle}
                                onChange={this.changeAngle}
                                id="angle"
                  />deg
                </span>
              </div>
               <div className="form-row">
                <label htmlFor="size">Chart Size:</label>
                <span style={{ float: 'right', marginRight: 50 }}>
                  <NumericInput min={0}
                                max={100}
                                value={this.state.config.size}
                                onChange={this.changeSize}
                                id="size"
                  />%
                </span>
              </div>
            </div>
            <div className="col-lg-3">
              <button onClick={this.randomData}>Random Data</button>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="table-index">#</th>
                    <th>Label</th>
                    <th>Value</th>
                    <th>Color</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(d => {
                    return (
                      <tr key={this.state.data.indexOf(d)}
                          style={{ backgroundColor: this.state.moved.indexOf(d.index) >= 0 ? 'green' : null }}
                      >
                        <th className="table-index">
                          {this.state.data.indexOf(d)}
                        </th>
                        <th>
                          <input type="text"
                                 value={d.label}
                                 onChange={this.changeLabel.bind(this, this.state.data.indexOf(d))}/>
                        </th>
                        <th>
                          <NumericInput value={Number(d.value).toFixed(2)}
                                        min={0}
                                        onChange={this.changeValue.bind(this, this.state.data.indexOf(d))}
                          />
                        </th>
                        <th style={{ }}>
                          <ColorPicker style={{ float: 'left' }}
                                       color={d.color}
                                       onChange={this.changeColor.bind(this, this.state.data.indexOf(d))}
                          />
                        </th>
                        <th>
                          {d.color}
                        </th>
                      </tr>
                    );
                  })}
                  <tr>
                    <th>
                      *
                    </th>
                    <th>
                      <button onClick={this.addRow}>Add row</button>
                    </th>
                    <th>
                      <button onClick={this.removeRow}>Delete row</button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

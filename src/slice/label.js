import React from 'react';

import move from '.././math/move';
import midlleAngle from '.././math/middleAngle';

export default class Label extends React.Component {

  static propTypes = {
    d: React.PropTypes.shape({
      label: React.PropTypes.string,
      endAngle: React.PropTypes.number,
      startAngle: React.PropTypes.number
    }).isRequired,
    rx: React.PropTypes.number.isRequired,
    ry: React.PropTypes.number.isRequired,
    h: React.PropTypes.number.isRequired,
  }

  render() {
    const middle = midlleAngle(this.props.d.startAngle, this.props.d.endAngle);
    const translate = move(this.props.d, this.props.rx, this.props.ry);
    const labelPathLength = 1 + this.props.h / this.props.rx / 2;
    const position = [
      (this.props.rx + 16) * (middle > 3 / 2 * Math.PI || middle < Math.PI / 2 ? 1 : -1),
      this.props.ry * Math.sin(middle) * labelPathLength + 3
    ];
    return (
      <text fontSize={10}
            transform={this.props.moved ?
              `translate(${[position[0] + translate[0], position[1] + translate[1]]})`
              :
              `translate(${position})`}
            textAnchor={middle > 3 / 2 * Math.PI || middle < Math.PI / 2 ? 'start' : 'end'}
      >
        {this.props.d.label ? `${this.props.d.label}(${
          ((this.props.d.endAngle - this.props.d.startAngle) / (2 * Math.PI) * 100).toFixed(0)}%)` :
          `${((this.props.d.endAngle - this.props.d.startAngle) / (2 * Math.PI) * 100).toFixed(0)}%`}
      </text>
    );
  }
}

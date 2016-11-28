import React from 'react';

import pieLabelPath from '.././math/pieLabelPath';
import move from '.././math/move';

export default class LabelPath extends React.Component {

  static propTypes = {
    d: React.PropTypes.shape({
    }).isRequired,
    rx: React.PropTypes.number.isRequired,
    ry: React.PropTypes.number.isRequired,
    h: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <path d={pieLabelPath(this.props.d, this.props.rx, this.props.ry, this.props.h)}
            stroke="black"
            transform={this.props.moved ?
              `translate(${move(this.props.d, this.props.rx, this.props.ry)})`
              :
              'translate(0,0)'}
      />
    );
  }
}

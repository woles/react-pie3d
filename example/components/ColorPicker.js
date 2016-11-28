import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {

  static propTypes = {
    color: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
    };
  }

  displayPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  handleOnChange = color => {
    this.props.onChange(color.hex);
  }

  render() {
    return (
      <div>
        <div onClick={this.displayPicker}
             style={{ backgroundColor: this.props.color, width: '20px', heigth: '20px', padding: '12px', cursor: 'pointer' }}
        >
        </div>
        { this.state.displayColorPicker ?
          <SketchPicker color={this.props.color} onChange={this.handleOnChange}/>
          : null}
      </div>
    );
  }
}

module.exports = ColorPicker;
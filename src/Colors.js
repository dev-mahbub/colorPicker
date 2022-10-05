import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Colors extends Component {
  static propTypes = {
    colorName: PropTypes.array.isRequired
  }
  render() {
    return (
      <div className="row">
        {this.props.colorName.map((color) => (
          <div className="col" key={color} style={{backgroundColor: color}}>
            {color}
          </div>
        ))}
      </div>
    );
  }
}

/*
import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Colors extends Component {
  static propTypes = {
    colorNames: PropTypes.array.isRequired
  }
  render() {
    return (
      <div className="row">
        {this.props.colorName.map((color) => (
          <div className="col" key={color} style={{backgroundColor: color}}>
            {color}
          </div>
        ))}
      </div>
    );
  }
}

*/

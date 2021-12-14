import React, { Component } from 'react';
import '../../../styles/BaseComponent/components/BaseComponent.scss';

class BaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="base-component">
        Hello, world! <br />
        I was rendered with React!
      </div>
    );
  }
}

export default BaseComponent;

import React from 'react';
import './Beauty.scss';

class Beauty extends React.Component {
  render() {
    return (
      <div className="beauty">
        <div className="beauty-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Beauty;

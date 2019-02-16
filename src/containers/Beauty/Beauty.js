import React from 'react';
import './Beauty.scss';

class Beauty extends React.Component {
  render() {
    return (
      <div className="beauty">
        {this.props.children}
      </div>
    );
  }
}

export default Beauty;

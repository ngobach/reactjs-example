import React from 'react';
import './TextPage.scss';

class TextPage extends React.PureComponent {
  render() {
    return (
      <div className="text-page">
        {this.props.children}
      </div>
    );
  }
}

export default TextPage;

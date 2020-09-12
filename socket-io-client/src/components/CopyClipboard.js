import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
class CopyClipboard extends React.Component {
  state = {
    copied: false,
  };
 
  render() {
    return (
      <div>
        <CopyToClipboard text= {this.props.text}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy</button>
        </CopyToClipboard>
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }
}
export default CopyClipboard;

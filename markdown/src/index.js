import React from 'react';
import { render } from 'react-dom';
// CSS
import './style/css/bootstrap.min.css';
import './index.css';
// JS
import { sampleText } from './sampleText';

class App extends React.Component {

  state = {
    text: sampleText
  };

  editText = (event) => {
    const text = event.target.value;
    this.setState({ text });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              cols="30"
              rows="35"
              value={this.state.text}
              className="form-control"
              onChange={(e) => this.editText(e)}>

            </textarea>
          </div>
          <div className="col-sm-6">
            {this.state.text}
          </div>
        </div>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
  );

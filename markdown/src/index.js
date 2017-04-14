import React from 'react';
import { render } from 'react-dom';
// CSS
import './style/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea name="" id="" cols="30" rows="35" value="Tapez votre texte" className="form-control"></textarea>
          </div>
          <div className="col-sm-6">
            <h1>Résultats</h1>
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

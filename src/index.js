import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }


    class Square extends React.Component {
        render() {
          return (
            <button className="square">
              {this.props.value}
            </button>
          );
        }
      }
      
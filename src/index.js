import React, { useSyncExternalStore } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Dictionary extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {dictionary: []};
  }
  
  saveWords() {
    let dictionary = [...this.state.dictionary];
    dictionary.push(this.newText.value);
    this.setState({dictionary});
    console.log(dictionary);
  }

  checkWord() {
    let word = this.checkText.value;
    if (word.includes(this.state.dictionary) === true) {
      console.log('The word is in the dictionary!');
    } else {
      console.log("The word doesn't exists!");
    }
  }

  render(){
      return (
          <div className="list">
            <h1> Dictionary</h1>
            Add the text here:
            <br></br>
            <input type="text" ref={(ip) => {this.newText = ip}}/>
            <br></br>
            <br></br>
            <button onClick={this.saveWords.bind(this)}>Add</button>
            <br></br>
            <br></br>
            <div>
              {this.state.dictionary.map(function(dictionary) {
                    return <li>{dictionary}</li>
               })}
            </div>
            <div>
              <br></br>
              Search in dictionary:
              <br></br>
              <input type="text" ref={(id) => {this.checkText = id}}/>
              <br></br>
              <br></br>
                <button onClick={this.checkWord.bind(this)}>Check Word</button>
              <br></br>
              <br></br>
            </div>
          </div>
      )
  }
};

root.render(<Dictionary/>);

reportWebVitals();

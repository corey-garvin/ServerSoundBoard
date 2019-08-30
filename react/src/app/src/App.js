import React, { Component } from 'react';

import peon from './peon.png';
import peasant from './peasant.png'

import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  myTummy = async (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/play/peon')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  
  jobsDone = async (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/play/peasant')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={peon} className="character-right" alt="peon" onClick={this.myTummy}/>
          <img src={peasant} className="character-left" alt="peasant" onClick={this.jobsDone}/>
        </header>
        <div style={{display:'none'}}>
          <p>{this.state.response}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Post to Server:</strong>
            </p>
            <input
              type="text"
              value={this.state.post}
              onChange={e => this.setState({ post: e.target.value })}
            />
            <button type="submit">Play</button>
          </form>
          <p>{this.state.responseToPost}</p>
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {

	componentDidMount() {

		fetch('https://newsapi.org/v2/top-headlines?q=bitcoin&apiKey=b0069dc818df4b2a89841b2282f19e58').then(res => {
			return res.json();
		}).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		});
		
	}

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

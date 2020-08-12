import React from 'react';

import GoatCorral from '../components/GoatCorral/GoatCorral';
import goatData from '../helpers/data/goatData';

import './App.scss';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  changeGoatStatus = (goatId) => {
    goatData.goatStatus(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;

    return (
      <div className="App">
        <h1><span role="img" aria-label="goat emoji">🐐</span> Goats</h1>
        <GoatCorral goats={goats} changeGoatStatus={this.changeGoatStatus}/>
      </div>
    );
  }
}

export default App;

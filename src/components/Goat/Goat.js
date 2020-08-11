import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;

    return (
      <div className="card goatCard">
        <img className="card-img-top" src={goat.imgUrl} alt="One specific goat" />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">This goat is {goat.age} {goat.age === 1 ? 'year' : 'years'} old and are described as: {goat.description}</p>
        </div>
      </div>
    );
  }
}

export default Goat;

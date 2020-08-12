import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/props/goatShape';

import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    toggleGoatStatus: PropTypes.func,
  }

  goatStatusEvent = (e) => {
    e.preventDefault();
    const { goat, toggleGoatStatus } = this.props;
    toggleGoatStatus(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="card bg-dark goatCard">
        <img className="card-img-top" src={goat.imgUrl} alt="One specific goat" />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">This goat is {goat.age} {goat.age === 1 ? 'year' : 'years'} old and are described as: {goat.description}</p>
        </div>
        <div className="card-footer">
          {
            goat.isTaken ? (
              <button className="btn btn-danger col-12" onClick={this.goatStatusEvent}>FREE THE GOAT</button>
            ) : (
              <button className="btn btn-success col-12" onClick={this.goatStatusEvent}>TAKE THE GOAT</button>
            )
          }
        </div>
      </div>
    );
  }
}

export default Goat;

import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/props/goatShape';
import Goat from '../Goat/Goat';

import './GoatCorral.scss';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
    toggleGoatStatus: PropTypes.func,
  }

  render() {
    const {
      goats, toggleGoatStatus,
    } = this.props;

    const goatCards = goats.map((goat) => (
      <Goat key={goat.id} goat={goat} toggleGoatStatus={toggleGoatStatus}/>
    ));

    return (
      <div className="goatCorral">
        { goatCards }
      </div>
    );
  }
}

export default GoatCorral;

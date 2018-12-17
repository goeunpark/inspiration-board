import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {
    let existingIcon = this.props.emoji;
    const getEmoji =   emoji.getUnicode(`${this.props.emoji}`)

    return (
      <div className="card card__content">
          <div className="card__content-emoji ">{existingIcon && getEmoji}</div>
          <div className="card__content-text">{this.props.text}</div>
          <button className="card__delete">~ d e l e t e ~ </button>

      </div>
    )
  }
}

Card.propTypes = {
  emoji: PropTypes.string,
  id: PropTypes.number,
  text: PropTypes.string
};

export default Card;

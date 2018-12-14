import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    const GET_BOARD = this.props.url;
    const BOARD_NAME = this.props.boardName;

    axios.get(GET_BOARD + BOARD_NAME + '/cards')
    .then((response) => {
      const formattedCards = response.data.map((card, i) => {
        return {emoji: card.card.emoji,
          id: card.card.id,
          text: card.card.text}
        });
        this.setState({
          cards: formattedCards,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      })
    }

    render() {
      return (
        <div>
          <Card />
        </div>
      )
    }

  }

  Board.propTypes = {

  };

  export default Board;

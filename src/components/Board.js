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
    const URL= this.props.url;
    const BOARD = `boards/${this.props.boardName}`;

    axios.get(URL + BOARD + '/cards')
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
      });
    }


    deletePost = (id) => {
      axios.delete(this.props.url +`cards/${id}`)
      .then((response) => {
        console.log(URL +`cards/${id}`)

        })
        .catch((error) => {
          this.setState({
            error: error.message,
          });
        })
      }


      render() {
        const cardList = this.state.cards.map((card) => {
          return <Card deletePostCallback={this.deletePost} {...card} />
        })
        return (
          <div>
            {cardList}
          </div>
        )
      }

    }

    Board.propTypes = {

    };

    export default Board;

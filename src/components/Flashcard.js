import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gloss from './Gloss';

class FlashcardListItem extends Component {
  render() {
    const { clue, answer } = this.props;
    return (
      <div className="flashcard shadow">
        <div className="flashcard__body">
          <h3 className="flashcard__clue">{ clue }</h3>
          <hr/>
          <p className="flashcard__answer">{ answer }</p>
        </div>
        <div className="flashcard__nav">
          <div className="flashcard__edit">
            edit
          </div>
          <div className="flashcard"></div>
        </div>
        <div className="flashcard__gloss">
          <Gloss />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ flashcards }) => ({ flashcards });

export default connect(mapStateToProps)(FlashcardListItem)

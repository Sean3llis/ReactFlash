import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flashcard from './Flashcard';

class FlashcardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="grid-x grid-padding-x">
          {Object.keys(this.props.flashcards).map((id) => {
            return (
              <div key={id} className="small-12 medium-4 large-3 cell">
                <Flashcard {...this.props.flashcards[id]} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ flashcard }) => {
  return {
    flashcards: flashcard.flashcards,
  }
}

export default connect(mapStateToProps)(FlashcardList)

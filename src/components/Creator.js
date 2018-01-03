import React from 'react'
import FlashcardList from './FlashcardList';
import FlashForm from './FlashForm';

const Creator = () => {
  return (
    <div className="Creator">
      <FlashForm />
      <FlashcardList />
    </div>
  );
}

export default Creator;
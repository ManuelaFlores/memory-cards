import React, { Component } from 'react';
import './HomePage.css'

const Card = ({ image, isSelected, isCorrect, onSelect }) => {
  return (
    <div
      className="modal mui-panel"
      onClick={
        () => {
          if (!isCorrect && !isSelected) {
            onSelect();
          }
        }
      }
    >
      <img
        style={{ visibility: (isCorrect || isSelected) ? 'visible' : 'hidden' }}
        src={"./images/" + image + ".jpg"}
        srcSet={"./images/" + image + "-copia.jpg"}
      />
    </div>
  )
}

export default Card;
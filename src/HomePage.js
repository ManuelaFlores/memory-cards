import React, { Component } from 'react';
import Card from './Card';
import './HomePage.css';

const CARDS = ['uno', 'uno', 'dos', 'dos', 'tres', 'tres', 'cuatro', 'cuatro'];

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: shuffle([...CARDS]),
      correct: [],
      selected: [],
      found: 0
    };
  }

  onCardClick(clickedIndex) {
    const { cards, correct, selected } = this.state;

    if (selected.length === 0) {
      this.setState({
        selected: [clickedIndex]
      })
    } else if (selected.length === 1) {
      if (cards[selected[0]] === cards[clickedIndex]) {
        this.setState({
          correct: correct.concat([selected[0], clickedIndex]),
          selected: [],
          found: this.state.found + 1
        });
        if (this.state.found === 3) {
          alert('Felicidades!! Ganaste :)')
        }
      } else {
        this.setState({
          selected: [selected[0], clickedIndex]
        });
        setTimeout(() => {
          this.setState({ selected: [] })
        }, 1500);
      }
    }
  }

  restart() {
    this.setState({
      cards: shuffle([...CARDS]),
      correct: [],
      selected: [],
      found: 0
    })
  }

  render() {
    const { cards, correct, selected } = this.state;

    return (
      <div>
        <h1>Memory Card</h1>
       
        <div className=" mui-panel wrapper">
          {cards.map((image, i) => (
            <Card
              key={i}
              image={image}
              isCorrect={correct.includes(i)}
              isSelected={selected.includes(i)}
              onSelect={() => this.onCardClick(i)}
            />
          ))}
        </div>
      </div>
    );
  }
}

function shuffle(array) {
  var index = array.length - 1;
  while (index > 0) {
    var storedValue = array[index];
    var al1 = Math.floor(Math.random() * (array.length - 1));
    array[index] = array[al1];
    array[al1] = storedValue;
    index--;
  }
  return array
}

export default HomePage;
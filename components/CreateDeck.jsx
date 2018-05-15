import React from 'react';
import ReactDOM from 'react-dom';

class CreateDeck extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      createdDeck: [],
    }
  }

  addToCreatedDeck = (e) =>{
    var selectedCardContainer = e.currentTarget;
    var tempArr = this.state.createdDeck;
    var selectedCard = selectedCardContainer.childNodes;
    var selectedCardName = selectedCard[0].childNodes[0].textContent;
    var selectedCardCost = selectedCard[0].childNodes[3].textContent;
    var selectedCardObject = {name: selectedCardName, cost: selectedCardCost}
    tempArr.push(selectedCardObject);
    this.setState({
      createDeck: tempArr
    })
  }

  saveDeck = (e) =>{
    e.preventDefault();
    localStorage.setItem('deck', this.state.createdDeck);
  }

  render(){
    if (this.props.isLoading) {
      return <div>Loading</div>
    }
    else {
      return <div className="create-deck-container">
        <div>
            Card list
          <ul className="all-cards-list">
            {
              this.props.expansionsNames.map( (elem, i) => {
                return this.props.expansionCards[i].map( (elem, i) => {
                  if (elem.collectible == true) {
                    return <li key={elem.cardId} onClick={this.addToCreatedDeck}><ul className="all-cards-list-item">
                      <li>{elem.name}</li>
                      <li>type:{elem.type}</li>
                      <li>rarity:{elem.rarity}</li>
                      <li>mana cost:{elem.cost}</li>
                      <li>attack:{elem.attack}</li>
                      <li>health: {elem.health}</li>
                    </ul>
                  </li>
                  }
                })
              })
            }
          </ul>

        </div>
        <div>
          Your deck
          <ul>
            {
              this.state.createdDeck.map( (elem, i) => {
                return <ul className="all-cards-list-item" key={i}>
                  <li>{elem.name}</li>
                  <li>{elem.cost}</li>
                </ul>
              })
            }
          </ul>
          <button onClick={this.saveDeck}>Save your deck</button>
        </div>
      </div>
    }
  }
}

export default CreateDeck;

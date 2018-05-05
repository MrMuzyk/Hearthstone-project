import React from 'react';
import ReactDOM from 'react-dom';

class ExpansionContainer extends React.Component{
  render(){
    return  <div className="card-container">
      <h1>{this.props.expansionName}</h1>
      {
        this.props.expansionCards.map( (elem, index) => {
          if (elem.collectible == true) {
          return <div key={elem.cardId} className="card-image-container">
            <img src={elem.img} className="card-image"/>
          </div>
        }
      })
      }
    </div>
  }
}

export default ExpansionContainer;

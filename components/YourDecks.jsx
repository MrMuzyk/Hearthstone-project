import React from 'react';
import ReactDOM from 'react-dom';

class YourDecks extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        allDecks: []
      }
    }

    componentWillMount(){
      var allDecks = localStorage.getItem('decks');
      var allDecksObject = JSON.parse(allDecks)
      this.setState({
        allDecks: allDecksObject
      })
      console.log(allDecks);
    }

    render(){
      return <div>
        {
          this.state.allDecks.map( (elem, i) => {
            return <div>
              <h1 key={i} className="decks-name">{elem.name}</h1>
              <div>{elem.cards.map( (elem, i) => {
                return <ul className="all-cards-list-item">
                  <li>{elem.name}</li>
                  <li>{elem.cost}</li>
                </ul>
              })}</div>
            </div>
          })
        }
      </div>
    }

}

export default YourDecks;

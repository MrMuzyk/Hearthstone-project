import React from 'react';
import ReactDOM from 'react-dom';
import ExpansionContainer from '../components/expansionContainer.jsx';

class App extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        cardsTable: "",
        isLoading: true,
        expansionsNames: [],
        expansionCards: []
      }
    }

      getData = () => {
        fetch('https://omgvamp-hearthstone-v1.p.mashape.com/cards' ,
              {headers: new Headers({
              'Accept':'application/json',
              "X-Mashape-Key": "BViokdfjWSmsh7mApJPlMBJ6A7dxp16HANbjsn6hEmkABczUFS"
          })
        }).then( resp => {
          return resp.json()
      }).then( data => {
          this.setState({
            cardsTable: data
          })
          console.log(data)
      }).then( () => {
          let cardsTable = this.state.cardsTable;
          delete cardsTable["Credits"];
          delete cardsTable["System"];
          delete cardsTable["Debug"];
          delete cardsTable["Tavern Brawl"];
          delete cardsTable["Missions"];
          delete cardsTable["Hero Skins"];
          delete cardsTable["Promo"]
      }).then( () => {
          this.setState({
            isLoading: false
          })
      }).then( () => {
        var expansionsNames = [];
        var expansionCards = [];
        Object.keys(this.state.cardsTable).map( (name, index) => {
          expansionCards.push( this.state.cardsTable[name] );
          expansionsNames.push(name);
        })
          this.setState({
            expansionCards: expansionCards,
            expansionsNames: expansionsNames
          })
      }).catch( error => {
          console.log(error)
      })
    }

    componentWillMount(){
      this.getData();

    }

    render(){
        if (this.state.isLoading) {
          return <div>Loading</div>
        }
        else {
        return <div>
          {
            this.state.expansionsNames.map( (elem, i) => {
              return <ExpansionContainer key={i} expansionName={elem} expansionCards={ this.state.expansionCards[i]} />
            })
          }
          </div>
        }

    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

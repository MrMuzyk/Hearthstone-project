import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexRoute,
    hashHistory } from 'react-router';
import ExpansionContainer from '../components/expansionContainer.jsx';
import BrowseCards from '../components/BrowseCards.jsx';
import YourDecks from '../components/YourDecks.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Carousel from '../components/Slider.jsx';
import OwlCarousel from 'react-owl-carousel2';
import CreateDeck from '../components/CreateDeck.jsx';
require ("../styles/main.scss");

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
          console.log(error);
          console.log("wysypalem sie");
      })
    }

    componentWillMount(){
      this.getData();

    }

    render(){
        return  <Router history={hashHistory} >
          <Route path="/" component={Template}>
              <IndexRoute component={LandingPage} />
              <Route path="/browseCards" component={ props => <BrowseCardsPage expansionsNames={this.state.expansionsNames} expansionCards={this.state.expansionCards} isLoading={this.state.isLoading} {...props}/>} />
              <Route path="/createDeck" component={ props => <CreateDeckPage expansionsNames={this.state.expansionsNames} expansionCards={this.state.expansionCards} isLoading={this.state.isLoading} {...props}/>} />
              <Route path="/yourDecks" component={YourDecks} />
              <Route path="/aboutProject" component={AboutProject} />
          </Route>
        </Router>


    }
}

class Template extends React.Component{
  render(){
    return <div className="main-container">
      <NavBar />
      <div className="content-container">
        {this.props.children}
      </div>
    </div>
  }
}

class LandingPage extends React.Component{
  render(){
    return <Carousel />
  }
}

class BrowseCardsPage extends React.Component{
  render(){
      return <div>
        <BrowseCards expansionsNames={this.props.expansionsNames} expansionCards={this.props.expansionCards} isLoading={this.props.isLoading}/>
        </div>
  }
}

class CreateDeckPage extends React.Component{
  render(){
    return <div>
      <CreateDeck expansionsNames={this.props.expansionsNames} expansionCards={this.props.expansionCards} isLoading={this.props.isLoading}/>
    </div>
  }
}

class YourDecksPage extends React.Component{
  render(){
    return <div>
      <YourDecks />
    </div>
  }
}

class AboutProject extends React.Component{
  render(){
    return <div>
      <div>About project</div>
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexRoute,
    IndexLink,
    hashHistory } from 'react-router';


class NavBar extends React.Component{

    render(){
      return <div className="nav-bar">
        <div><IndexLink to='/' className="nav-bar-logo">HearthCard</IndexLink></div>
        <ul className="nav-bar-options">
          <li><IndexLink to='/browseCards' className="nav-bar-link">Browse Cards</IndexLink></li>
          <li><IndexLink to='/createDeck' className="nav-bar-link">Create deck</IndexLink></li>
          <li><IndexLink to='/yourDecks' className="nav-bar-link">Your Decks</IndexLink></li>
          <li><IndexLink to='/aboutProject' className="nav-bar-link">About project</IndexLink></li>
        </ul>
      </div>
    }

}

export default NavBar;

import React from 'react';
import ReactDOM from 'react-dom';

class ExpansionContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick = () =>{
    if (this.state.clicked == false) {
      this.setState({
        clicked: true
      })
    }
    else if (this.state.clicked == true) {
      this.setState({
        clicked: false
      })
    }

  }

  render(){

    if (this.state.clicked) {

      return  <div className="card-container" onClick={this.handleClick}>
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
    else {
      return  <div className="card-container" onClick={this.handleClick}>
        <h1>{this.props.expansionName}</h1>
      </div>
    }

  }
}

export default ExpansionContainer;

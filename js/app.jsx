import React from 'react';
import ReactDOM from 'react-dom';

class Naxxramas extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cardsTable: ""
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
        console.log(this.state.cardsTable.Naxxramas[0].img)
    }).then( () => {

    }).catch( error => {
        console.log(error)
    })
  }

  componentWillMount(){
    this.getData();
  }


  render(){
    return <div>
      <h1>Naxrammas</h1>
      <img src={ "" + this.state.cardsTable.Naxxramas[0].img } />
    </div>
  }
}

class App extends React.Component {
  render(){
    return <Naxxramas />
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

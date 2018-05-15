import React from 'react';
import ReactDOM from 'react-dom';
import ExpansionContainer from '../components/expansionContainer.jsx';

class BrowseCards extends React.Component{

    render(){
      if (this.props.isLoading) {
        return <div>Loading</div>
      }
      else {
      return <div>
        {
          this.props.expansionsNames.map( (elem, i) => {
            return <ExpansionContainer key={i} expansionName={elem} expansionCards={ this.props.expansionCards[i]} />
          })
        }
      </div>
      }
    }

}

export default BrowseCards;

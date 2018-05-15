import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexRoute,
    IndexLink,
    hashHistory } from 'react-router';


class Footer extends React.Component{

    render(){
      return <div className="footer">
        MrMuzyk Copyright 2018 
      </div>
    }

}

export default Footer;

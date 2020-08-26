import React, { Component } from 'react';
import './App.css'
// import MyList from './MyList';

class ListItem extends Component {
    render () {
        return (
           <div>
               <li>{this.props.doThis}</li>
           </div>  
        )
    }
}



export default ListItem;
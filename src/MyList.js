// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {

  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList
    }
  }

  clearList (e) {
    //console.log('Clearing list!')
    this.setState({
      toDoItemArray: []
    })
  }

  render () {
    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={ index } />
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating: </h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finish the list!</button>
      </div>
    )
  }
}

export default MyList;

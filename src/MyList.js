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
  constructor(props) {
    super();
    this.state = {
      toDoItemArray: props.theList,
      newItem: "",
    };
  }

  newItemChange(e) {
    console.log("Changing Item!");
    this.setState({
      newItem: e.target.value,
    });
  }

  addItem(e) {
    e.preventDefault();
    this.setState({
      newArray: this.state.toDoItemArray.push(this.state.newItem),
    });
  }

  clearList(e) {
    //console.log("Clearing List!");
    this.setState({
      toDoItemArray: [],
    });
  }

  render() {
    let toDoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={ index } />
    ));

    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>{toDoItems}</ul>
        <form>
          <input
            type="text"
            placeholder="Type an item here"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
    );
  }
}


export default MyList;

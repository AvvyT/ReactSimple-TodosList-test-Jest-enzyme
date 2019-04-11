import React, { Component } from 'react';
import './App.css';

let id = 0;

class App extends Component {

  state = { items: [], item: "" }

  changeInput(e) {
    this.setState({ item: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    id++;

    let newTodo = { name: this.state.item, id: `uniq${id}` };
    let items = [...this.state.items, newTodo];

    this.setState({ items, item: "" });
  }

  handleDelete(id) {
    this.setState({ items: this.state.items.filter(item => id !== item.id) });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todos list</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              className='item'
              placeholder=' Write new item..'
              value={this.state.item}
              onChange={this.changeInput.bind(this)}
            />
            <input
              type='submit'
              value='Add'
            />
          </form>
          <ul>

            {this.state.items.map((item) => (
              <li className='aitem' key={item.id}>
                {item.name}
                <button className="remove"
                  onClick={this.handleDelete.bind(this, item.id)}>x</button>
              </li>
            ))}

          </ul>
        </header>
      </div>
    );
  }
}

export default App;

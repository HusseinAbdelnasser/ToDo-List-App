import React, { Component } from 'react';
import './App.css';
import TodoItems from './Components/ToDoItem';
import AddItems from './Components/AddItem';

class App extends Component{

   state = {
        items : [
           {id: 1, name: 'Hamza', age: 22},
           {id: 2, name: 'Mohamed', age: 23},
           {id: 3, name: 'Abdo', age: 24}
        ]
   }

   deleteItem = (id) => {
       let items = this.state.items;
       let i = items.findIndex(item => item.id === id);
       items.splice(i,1);
       this.setState({items})
   }


   addItem = (item) => {
       item.id= Math.random();
       let items = this.state.items;
       items.push(item);
       this.setState({items})
   }


    render() {
        return(
            <div className="App container">
              <h2 className="text-center">ToDoList App</h2> 
               <TodoItems items = {this.state.items} deleteItem = {this.deleteItem} />
               <AddItems addItem={this.addItem} />
            </div>
        )
    }
}

export default App;

import React  from 'react'
import TodoForm from './TodoForm'



export default class TodoList extends React.Component {

  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };


  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  };

  toggleComplete = id => {
    console.log(id)
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  changeDisplayFilter = filter => {
    this.setState({
      todoToShow: filter
    })
  }

  handleToDelete = id => {
    this.setState(state => {
      todos: state.todos.filter(todo => todo.id !== id);
    })
  };


  render() {

    let todo = []

    if (this.state.todoToShow === 'all') {
      todo = this.state.todos
    } else if (this.state.todoToShow === 'complete') {
      todo = this.state.todos.filter(todo => todo.complete)
    } else if (this.state.todoToShow === 'active') {
      todo = this.state.todos.filter(todo => !todo.complete )
    }
  


    return(
      <div>
      <TodoForm onSubmit={this.addTodo}/>
        <button onClick={() => this.changeDisplayFilter("all")}>All</button>
        <button onClick={() => this.changeDisplayFilter("active")} >Active</button>
        <button onClick={() => this.changeDisplayFilter("complete")}>Complete</button>

        <div>
          <ul>
            {todo.map(note => (
              <li onClick={() => this.toggleComplete(note.id)}>{note.text}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }





}
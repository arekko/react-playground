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
    this.setState(state => {
      todos: state.todos.map(todo => {
        if (todo.id = id) {
          return {
              ...todo,
            complete: true
          }
        } else {
          return todo
        }
      })
    })
  }


  handleToDelete = id => {
    this.setState(state => {
      todos: state.todos.filter(todo => todo.id !== id);
    })
  };


  render() {
    return(
        <TodoForm onSumbit={this.addTodo}/>
    )
  }





}
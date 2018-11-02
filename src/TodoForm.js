import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {

  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });

    this.setState({
      text: '',
    });
  };

  render() {
    return (
        <div>
          <form action="">
            <input
                type="text" name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="todo ..."
            />
            <button onClick={this.handleSubmit}>Add todo</button>
          </form>
        </div>

    );
  }

}
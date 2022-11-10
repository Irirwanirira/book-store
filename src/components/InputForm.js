import { Component } from 'react';

class InputBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      book: "",
    };
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" name="author" placeholder="author" />
          <input type="text" name="title" placeholder="Title" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default InputBooks;

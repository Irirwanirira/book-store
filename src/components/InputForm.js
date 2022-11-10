/* eslint-disable */ 
import { Component } from "react";

const InputBooks = () => {
  return (
    <div>
      <form>
        <input type="text" name="author" placeholder="author" /><br />
        <input type="text" name="book" placeholder="Title" /><br />
        <button type="submit">Submit</button> <br />
      </form>
    </div>
  );
};

export default InputBooks;

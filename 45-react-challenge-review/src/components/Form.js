import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
    // const obj = {name: 'sam'}
    // obj.name
    // const key = 'name'
    // obj[key]
  }

  submitForm = () => {
    this.props.addBook(this.state)
    this.setState({
      title: '',
      author: '',
      img: ''
    })
  }

  render() {
    return <form
      onSubmit={e => {
        e.preventDefault();
        this.submitForm()
      }}
      onChange={e => this.handleChange(e.target.name, e.target.value)}>
      <input type="text" name="title" value={this.state.title} placeholder="Title" />
      <input type="text" name="author" value={this.state.author} placeholder="Author" />
      <input type="text" name="img" value={this.state.img} placeholder="Image url" />
      <input type="submit" />
    </form>;
  }
}

export default Form;

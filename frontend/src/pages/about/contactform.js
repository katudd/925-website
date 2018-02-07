import React from "react"
import "./about.css"

// import Adminpage from "pages/admin/adminpage"

export default class Contactform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      messagereply: ""
    }
  }

handleName = event => {
  this.setState({
    name: event.target.value
  })
}

handleEmail = event => {
  this.setState({
    email: event.target.value
  })
}

handleMessage = event => {
  this.setState({
    message: event.target.value
  })
}

getMessagereply = () => {
  if (this.state.messagereply) {
    return <p>{this.state.messagereply}</p>
  }
}

handleSubmit = event => {
  event.preventDefault()
  fetch("https://story-final-project.herokuapp.com/contactform", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  }).then(response => (
    this.setState({
      name: "",
      email: "",
      message: "",
      messagereply: "Meddelandet skickat!"
    }, () => { console.log("State has been reset", response, response.status) })
  ))
}

render() {
  return (
    <div className="contactform-container">
      <form onSubmit={this.handleSubmit}>
        <label>
          Namn
          <input type="text" required value={this.state.name} onChange={this.handleName} />
        </label>
        <label>
          Mail
          <input type="email" required value={this.state.email} onChange={this.handleEmail} />
        </label>
        <label>
          Meddelande
        <input type="text" required value={this.state.message} onChange={this.handleMessage} />
        </label>
        <div className="message">
          {this.getMessagereply()}
        </div>
        <button>Skicka</button>
      </form>
    </div>
  )
}
}

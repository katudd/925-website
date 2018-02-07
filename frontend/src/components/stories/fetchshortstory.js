import React from "react"

import Shortstory from "./shortstory"
import "./shortstory.css"

export default class Fetchshortstory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      latestShortStory: {}
    }
  }

  componentDidMount() {
    fetch("https://story-final-project.herokuapp.com/adminstory/latest").then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        latestShortStory: json
      })
    })
  }

  render() {
    return (
      <div className="shortstory-container">
        <Shortstory
          id={this.state.latestShortStory._id}
          image={this.state.latestShortStory.image}
          heading={this.state.latestShortStory.heading}
          shortText={this.state.latestShortStory.shortText} />
      </div>

    )
  }
}

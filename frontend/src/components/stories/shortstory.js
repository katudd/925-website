import React from "react"
import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"

import "./shortstory.css"

export default class Shortstory extends React.Component {
  render() {
    return (
      <div className="Shortstory">
        <img id="shortstory-image" src={this.props.image} alt="" />
        <div className="story-box-seperator" />
        <div className="shortstory-text-container">
          <h2 className="heading">{this.props.heading}</h2>
          <div className="shorttext"><ReactMarkdown source={this.props.shortText} /></div>
          <a> <Link to="/Story">Läs mer &#x27F6;</Link> </a>
        </div>
      </div>
    )
  }
}
//

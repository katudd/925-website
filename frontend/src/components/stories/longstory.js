import React from "react"
// import DeleteStory from "components/deletestory"
import ReactMarkdown from "react-markdown"

import "./longstory.css"

export default class Longstory extends React.Component {
  render() {
    return (
      <div className="longstory-container">
        <img id="longstory-image" src={this.props.image} alt="" />
        <p className="caption">{this.props.caption}</p>
        <div className="story-box-seperator" />
        <h2 className="heading">{this.props.heading}</h2>
        <div className="longtext"><ReactMarkdown source={this.props.longText} /></div>
        {/* <div className="story-box-seperator-long" /> */}
        {/* {localStorage.getItem("accessToken") && localStorage.getItem("userId") &&
          <DeleteStory story={this.props.story._id} />} */}
      </div>
    )
  }
}

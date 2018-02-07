import React from "react"

export default class DeleteStory extends React.Component {

handleDeleteStory = () => {
  fetch(`https://story-final-project.herokuapp.com/adminstory/${this.props.story._id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  }).then(() => {
    this.props.delete(this.props.story._id)
  })
}

render() {
  return (
    // {localStorage.getItem("accessToken") && localStorage.getItem("userId") &&
    //   <DeleteStory story={} />}
    <button onClick={this.handleDeleteStory}>DELETE</button>
  )
}
}

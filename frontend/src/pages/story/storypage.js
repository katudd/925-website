import React from "react"
import Longstory from "components/stories/longstory"
import NavigationBlack from "components/navigation-black"
import Footer from "components/footer"
import DeleteStory from "components/deletestory"
import "components/stories/longstory.css"

export default class Storypage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      storiesList: []
    }
  }

  componentDidMount() {
    fetch("https://story-final-project.herokuapp.com/adminstory").then(response => {
      return response.json()
    }).then(json => {
      const reversedJson = json.reverse()
      console.log(json)
      this.setState({ storiesList: reversedJson })
    })
  }

  handleRemoveStory = _id => {
    const newStoriesList = this.state.storiesList.filter(story => {
     return story._id !== _id
    })

    this.setState({
      storiesList: newStoriesList
    })
  }


  render() {

    const storiesListToRender = this.state.storiesList

    return (
      <div>

        <NavigationBlack />

        <div className="Stories-list">

          {storiesListToRender.map(story => {
            return <Longstory
              key={story._id}
              id={story._id}
              heading={story.heading}
              longText={story.longText}
              image={story.image}
              caption={story.caption}
              delete={this.handleRemoveStory} />
          })}

        </div>
        <Footer />
      </div>
    )
  }
}

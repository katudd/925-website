import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Adminpage from "pages/admin/adminpage"
import Storypage from "pages/story/storypage"
import Aboutpage from "pages/about/aboutpage"
import Startpage from "pages/start/startpage"
import AdminLoginPage from "pages/adminlogin/adminloginpage"
// import Swipe from "./swipe/swipe"
// import Navigation from "./navigation"
// import Footer from "./footer"
// import Grid from "./grid/grid"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fetchContact: []
    }
  }

  componentDidMount() {
    fetch("https://story-final-project.herokuapp.com/contactform").then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        fetchContact: json
      })
    })
  }

  handleRemoveText = _id => {
    const newItemList = this.state.fetchContact.filter(item => {
     return item._id !== _id
    })

    this.setState({
      fetchContact: newItemList
    })
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Startpage} />
          <Route
            // exact
            path="/admin"
            render={routeProps =>
              <Adminpage
                {...routeProps}
                questions={this.state.fetchContact}
                delete={this.handleRemoveText} />
            } />
          <Route exact path="/story" component={Storypage} />
          <Route exact path="/about" component={Aboutpage} />
          <Route exact path="/login" component={AdminLoginPage} />
        </div>

      </HashRouter>
    )
  }

}

export default App

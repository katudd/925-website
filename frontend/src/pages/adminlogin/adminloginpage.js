import React from "react"
import AdminLoginForm from "components/adminloginform"
import NavigationWhite from "components/navigation-white"
import Footer from "components/footer"

export default class AdminLoginPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      accessToken: "",
      userId: ""
    }
  }

  // handle admin login

  handleLoginSuccess = user => {
    this.setState({
      accessToken: user.accessToken,
      userId: user._id
    })
    localStorage.setItem("accessToken", user.accessToken)
    localStorage.setItem("userId", user._id)
    this.props.history.push("/admin")
  }

  isLoggedIn = () => (
    this.state.accessToken && this.state.userId
  )

  render() {
    return (
      <div>
        <NavigationWhite />
        {this.isLoggedIn()
          ? <h1>Välkommen!</h1>
          : <AdminLoginForm onLoginSuccess={this.handleLoginSuccess} />}
          <Footer />
      </div>
    )
  }

}

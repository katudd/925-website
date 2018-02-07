import React from "react"
import { Link } from "react-router-dom"

import "./navigation.css"

export default class NavigationWhite extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img className="logo" src="/images/925_logo_white.svg" alt="logo 925" />
        </Link>

        <div className="box-seperator" />
        <div className="nav-links nav-link-1">
          <Link to="/story">
            Story
          </Link>
        </div>
        <div className="nav-links nav-link-2">
          <Link to="/about">
            Om oss
          </Link>
        </div>
      </nav>
    )
  }
}

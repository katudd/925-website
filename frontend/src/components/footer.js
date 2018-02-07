import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"

import "./navigation.css"

const year = moment().format("YYYY")

export default class Footer extends React.Component {
  render() {
    return (
      <footer>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/katrinuddstromer/" target="_blank" rel="noopener noreferrer" className="fa fa-instagram" />
          <a href="https://github.com/katudd" target="_blank" rel="noopener noreferrer" className="fa fa-facebook" />
        </div>

        <div className="footer-contact">
          <ul className="admin-link">
            <li><span className="bold">ADRESS</span></li>
            <li>925 Silver AB</li>
            <li>Sivia Torg</li>
            <li>Uppsala</li>
          </ul>
          <ul className="admin-link">
            <li><span className="bold">MAIL</span></li>
            <li>0708 - 73 03 64</li>
            <li><span className="bold">MOBIL</span></li>
            <li>lene@925ab.se</li>
          </ul>
        </div>

        <ul className="admin-link login">
          <li><Link to="/login">Admin-login</Link></li>
          <li>&copy; {year}</li>
        </ul>

      </footer>
    )
  }
}

import React from "react"
import NavigationWhite from "components/navigation-white"
import Swipe from "components/swipe/swipe"
import Fetchshortstory from "components/stories/fetchshortstory"
// import JewelerySwipe from "assets/jewelery_swipe_7.png"
import Hero from "components/hero/hero"
import Footer from "components/footer"
import Grid from "components/grid/grid"
import "./style.css"

export default class Startpage extends React.Component {

  render() {
    return (
      <div>
        <Hero />
        <NavigationWhite />
        <div className="grid-content">
          <Grid />
        </div>
        <Fetchshortstory />
        <div className="swipe-content">
          <Swipe />
        </div>
        <Footer />

      </div>
    )
  }

}

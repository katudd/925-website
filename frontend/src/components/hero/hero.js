import React from "react"
import JewelerySwipeDesktop from "assets/jewelery_swipe_7.png"
import JewelerySwipeMobile from "assets/jewelery_swipe_7_mobile.png"
import "./hero.css"

export default class Hero extends React.Component {

  render() {
    return (
      <div>

        <div className="background-color">
          <div className="background-image desktop" style={{ backgroundImage: `url(${JewelerySwipeDesktop})` }} alt="a" />
          <div className="background-image mobile" style={{ backgroundImage: `url(${JewelerySwipeMobile})` }} alt="a" />
        </div>

        <div className="intro-container">
          {/* <div className="logo-big">
            <img className="logo-big-image" src="images/925_logo_white_thin.svg" alt="big logo"/>
          </div> */}
          <div className="intro">
            <h1>Smycken som är <br />
          lika unika som du
            </h1>
            <p>925 är en silversmedja och mötesplats för hantverk, design och utbildning i Uppsala. <br />
              I butiken kan du köpa eller beställa unika, nutida smycken och korpus.
              Möt silvret och låt dig inspireras.
            </p>
          </div>
          <div className="arrow" />
        </div>
      </div>
    )
  }

}

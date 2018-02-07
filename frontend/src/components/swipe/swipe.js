import React from "react"
import "pages/start/style.css"
import "./swipe.css"

export default class Swipe extends React.Component {

  render() {
    return (
      <div className="swipe-container">
        <div className="swipe-arrow" />
        <div className="swipe-wrapper">
          <div className="swipe-image-container">
            <img className="swipe-image one" src="/images/jewelery_swipe_1.png" alt="woman with jewelery" />
          </div>
          <div className="swipe-image-container">
            <img className="swipe-image two" src="/images/jewelery_swipe_4.png" alt="woman with jewelery" />
          </div>
          <div className="swipe-image-container">
            <img className="swipe-image three" src="/images/jewelery_swipe_3.png" alt="woman with jewelery" />
          </div>
          <div className="swipe-image-container">
            <img className="swipe-image four" src="/images/jewelery_swipe_5.png" alt="woman with jewelery" />
          </div>
          <div className="swipe-image-container">
            <img className="swipe-image five" src="/images/jewelery_swipe_2.png" alt="woman with jewelery" />
          </div>
          <div className="swipe-image-container">
            <img className="swipe-image six" src="/images/jewelery_swipe_6.png" alt="woman with jewelery" />
          </div>
        </div>
      </div>
    )
  }

}

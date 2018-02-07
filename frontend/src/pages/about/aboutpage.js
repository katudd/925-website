import React from "react"
import NavigationBlack from "components/navigation-black"
import Contactform from "./contactform"
import Footer from "components/footer"

import "./about.css"



export default class Aboutpage extends React.Component {

  render() {
    return (
      <div>

        <NavigationBlack />

        <div className="About">

          <img id="about-image" src="https://cdn.shopify.com/s/files/1/1441/9078/t/2/assets/slide1_image.jpg?13771845951382644638" />
          <div className="story-box-seperator" />
          <h1>Hej!</h1>


          <div className="about-text">

          <p>Jag heter Lene Uddströmer och driver sedan våren 2008 butiken och verkstaden 925AB på Sivia Torg i Uppsala. Jag är mästare inom silversmedsyrket som jag lärt mig genom utbildning på Hantverkets Folkhögskola i Leksand, samt praktik hos flera mästare.</p>
          <p>Jag designar själv allt jag tillverkar och jobbar främst i silver, men även i rött och vitt guld. Mest gör jag mindre föremål och smycken, men arbetar gärna med större föremål, så som skålar, vaser och kannor, så kallad corpus. Jag designar även små och stora skulpturer.</p>
          <p>I verkstaden specialarrangerar jag kurser i silversmide, från några timmar till hela veckokurser.</p>
          <p>Välkommen in på ett besök i min butik. Om du har några frågor kan du skicka ett meddelande med formuläret nedan, så återkommer jag.</p>
          </div>

          <h2>Hör av dig här</h2>
          <Contactform />
        </div>
        <Footer />
      </div>
    )
  }
}

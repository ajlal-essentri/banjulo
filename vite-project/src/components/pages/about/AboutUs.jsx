import Hero from "./hero/aboutHero";
import WhoWeAre from "./animation/WhoWeAre";
import Card from "./cards/card";
import Story from "./ourStory/story";
import Team from "./theTeam/team";
import Commitment from "./Commitment/Commitment";
import JoinUs from "./joinUs/joinUs";
import Footer from "../../layout/footer/Footer";

function AboutUs(){
return(
   <>
   <Hero />
  <WhoWeAre />
  <Card/>
  <Story/>
  <Team/>
  <Commitment/>
  <JoinUs/>
  <Footer/>
   </>
)
}

export default AboutUs;
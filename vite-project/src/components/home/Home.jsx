import NavBar from "../layout/navBar/navBar";
import WhyChooseBanjulo from "./whyChoose/WhyChooseBanjulo";
import HeroSection from "./hero/Hero";
import Product from "./product/ProductsSection";
import EarnWithBanjulo from "./earn/EarnWithBanjulo";
import HowBanjuloWorks from "./howWorks/How-Banjulo-Works";
import UserReview from "./comment/UserReview";
import Footer from "../layout/footer/Footer";

function Home() {

  return (

    <>
      {/* <NavBar />, */}
      <HeroSection />,
      <WhyChooseBanjulo />,
      <Product />,
      <EarnWithBanjulo />,
      <HowBanjuloWorks />,
      <UserReview />,
      <Footer/>

    </>
  )
}

export default Home;
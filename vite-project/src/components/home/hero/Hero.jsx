import './hero.css'
import heroData from '../../data/hero';
function HeroSection() {

    
    return (
        <div className="heroSection">

            <img className="heroSectionImg" src={heroData.image} alt={heroData.name} />

            <div className="heroContent">
                <h1>{heroData.name}</h1>

                <p className="heroText">
                    <span className="brand">Banjulo.</span> {heroData.text}
                </p>

                <form action="">
                    <input className="forSameCss" type="text" placeholder="Enter your email here." />
                    <button className="forSameCss">Stay Informed</button>
                </form>

            </div>

        </div>
    )
}

export default HeroSection;
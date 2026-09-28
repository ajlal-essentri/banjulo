import './EarnWithBanjulo.css'
import earningImg from "../../../assets/images/earn/earningImg.jpg"

function EarnWithBanjulo(){

    return(
        <>
        <div className="Earn-Section">
            <div className="earnSectionContent forRes">
                <h2>Earn Money with Banjulo</h2>
                <p>Discover how you can turn your skills and unused items into cash. Whether you're selling products or offering services, Banjulo provides the platform to reach customers and grow your business.</p>
                <button>Learn How It Works  </button>
            </div>

            <div className="earnSectionImg forRes">
                <img src={earningImg} alt="" />
            </div>
        </div>
        </>
    )
}

export default EarnWithBanjulo;
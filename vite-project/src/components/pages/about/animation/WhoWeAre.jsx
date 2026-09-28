import './WhoWeAre.css'
import { animationData, animationImgData } from '../../../data/animation';

function WhoWeAre() {
    return (
        <div className='cardBox'>
            <div className='whoWeAreH1'>
                {animationData.title}
            </div>
            <div className='imgSlider'>
                <div className="sliderBox">
                    <div className="slideTrack">
                        {animationImgData.map((item) => (

                            <img key={item.id} src={item.image} alt="" />
                        ))}
                        {animationImgData.map((item) => (

                            <img key={item.id} src={item.image} alt="" />
                        ))}
                    </div>
                </div>
                <div />
                <div className='content'>
                    <p><span className='brand'>Banjulo.com</span>{animationData.dicreption}</p>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;
import howWorksData from '../../data/howWorks';
import './howBanjuloWorks.css'

function HowBanjuloWorks() {
    return (
        <>
            <div className="How-Banjulo-Works-Section">
                <div className="HowBanjuloWorksH1">
                    <h2>How Banjulo Works</h2>
                </div>

                <div className="instructions-Section">

                    {
                        howWorksData.map((item) => (
                            <div className="instructions" key={item.id}>

                                <div className='forCircle'>
                                    <h2>{item.title}</h2>
                                </div>
                                <h3>{item.instructions}</h3>
                                <p>{item.dicreption}</p>
                            </div>
                        ))}

                </div>

                <div className='accessBtnDiv' >
                    <button className="accessButton">Get Early Access!</button>
                </div>
            </div>
        </>
    )
}

export default HowBanjuloWorks;
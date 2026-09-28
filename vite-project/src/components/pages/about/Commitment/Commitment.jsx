import CommitmentData from "../../../data/Commitment";
import '../Commitment/Commitment.css'
function Commitment() {
    return (
        <div className="CommitmentSec">
            <div className="title">
                <h2>Our Commitment</h2>
            </div>
                {
                    CommitmentData.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div className="Commitments" key={item.id}>
                                <Icon className="forSvg" size={24} color="#0d9488" />
                                <p>{item.commitment}</p>
                            </div>
                        )})}
        </div>
    )
}

export default Commitment;
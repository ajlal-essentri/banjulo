import '../theTeam/team.css'
import { teamData } from '../../../data/story';

function Team() {
    return (
        <div className="teamBox">
            <div className="teamImg">
                <img src={teamData.image} alt="" />
            </div>
            <div className="teamContent">
                <h2>{teamData.title}</h2>
                <p><span className='brandd'>Banjulo.com</span> {teamData.dicreption}</p>
            </div>
        </div>
    )
}

export default Team;
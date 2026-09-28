import '../ourStory/story.css'
import {storyData} from '../../../data/story';
function Story() {
    return (
        <div className="storyBox">
            <h2>{storyData.title}</h2>
            <div className="contentBox">
                <p><span className="brand">Banjulo.com</span>{storyData.dicreption1}</p>
                <p><spa className="brand">Banjulo.com</spa> {storyData.dicreption2} <br /> helps you reach the right audience and thrive locally.</p>
            </div>
        </div>
    )
}

export default Story;
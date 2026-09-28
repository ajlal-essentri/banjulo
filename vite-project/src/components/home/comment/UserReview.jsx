import './UserReview.css'
import userData from '../../data/user';
import { Star } from "lucide-react";
function UserReview() {

    // const renderStars = () => {
    //     return [...Array(5)].map((_, index) => (
    //         <Star
    //             key={index}
    //             size={18}
    //             fill="#FACC15"
    //             color="#FACC15"
    //         />
    //     ));
    // };

    return (
        <>
            <div className='userReviewSection'>
                <div className="userh1">
                    <h2>What Our Users Are Saying?</h2>
                </div>

                <div className="useerCommentsSection">

                    {
                        userData.map((item) => (

                            <div className="userComments" key={item.id}>
                                <div className='userInfo'>
                                    <div className='userImg'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='userText'>
                                        <h3>{item.name}</h3>
                                        <p>{item.roll}</p>
                                    </div>
                                </div>
                                <p>{item.comment}</p>

                                <div className='rating'>
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} size={18} fill="#FACC15" color="#FACC15" />
                                    ))}
                                </div>

                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default UserReview;
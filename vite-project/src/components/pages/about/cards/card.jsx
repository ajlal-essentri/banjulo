import "../../../home/whyChoose/WhyChooseBanjulo.css"
import cardData from "../../../data/aboutCard";

function Card() {
    return (
        <div className="WhyChooseSection">

            <div id="Card-Sections">
                {
                    cardData.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div className="Cards" key={item.id}>
                                <Icon size={48} color="#0d9488" />

                                <h3>{item.title}</h3>
                                <p>{item.dicreption }</p>
                            </div>
                        )})}
            </div>
        </div>
    );
}

export default Card;
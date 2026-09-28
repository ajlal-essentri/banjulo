import "./WhyChooseBanjulo.css";
import whyData from "../../data/whyChooseData";

function WhyChooseBanjulo() {
    return (
        <div className="WhyChooseSection">
            <div className="cardSectionH1">
                <h2>Why Choose Banjulo?</h2>
            </div>

            <div id="Card-Sections">
                {
                    whyData.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div className="Cards" key={item.id}>
                                <Icon size={48} color="#0d9488" />

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default WhyChooseBanjulo;
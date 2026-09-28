
import './ProductSection.css'
import productData from "../../data/product";

import { useState } from "react";

function Product() {

    // let Product = [
    //     {
    //         id: 1,
    //         Image: productImg1,
    //         name: "Handwoven Basket",
    //         price: "250 GMD"
    //     },
    //     {
    //         id: 2,
    //         Image: productImg2,
    //         name: "Traditional Gambian Dress",
    //         price: "699 GMD"
    //     },
    //     {
    //         id: 3,
    //         Image: productImg3,
    //         name: "Phone",
    //         price: "3500 GMD"
    //     },
    //     {
    //         id: 4,
    //         Image: productImg4,
    //         name: "Gambia Shirt",
    //         price: "150 GMD"
    //     },
    //     {
    //         id: 5,
    //         Image: productImg5,
    //         name: "Recycled Glass Bead Necklace",
    //         price: "499 GMD"
    //     },
    //     {
    //         id: 6,
    //         Image: productImg6,
    //         name: "Traditional Shoes",
    //         price: "799 GMD"
    //     },
    //     {
    //         id: 7,
    //         Image: productImg7,
    //         name: "African Drum (Djembe)",
    //         price: "1199 GMD"
    //     },
    //     {
    //         id: 8,
    //         Image: productImg8,
    //         name: "Car For Sale",
    //         price: "2999999 GMD"
    //     }

    // ]

    let [selectProduct, setSelectProduct] = useState(null);


    return (
        <>
            <div className='Product-Section'>
                <div className='productSecH1'>
                    <h1>Featured Products</h1>
                </div>

                <div className='Products-Section'>
                    {productData.map((item) => (
                        <div className="products" key={item.id}>
                            <img src={item.image} alt={item.title} />

                            <div className="overlay">
                                <button onClick={() => setSelectProduct(item)}>
                                    Quick View
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {
                selectProduct && (
                    <div className="modal">
                        <div className="modal-Box">
                            <button className="close-btn" onClick={() => setSelectProduct(null)}>
                                ✕
                            </button>
                            <img src={selectProduct.image} alt="" />
                            <div className="modal-details">
                                <h2>{selectProduct.title}</h2>
                                <p>{selectProduct.price}</p>
                            </div>
                        </div>
                    </div>
                )

            }
        </>
    )
}

export default Product;
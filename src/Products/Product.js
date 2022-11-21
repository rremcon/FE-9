import React from 'react';

function Product({image, label, title, price}) {
    return (
        <article>
            <img src={image} alt={""}/>
            <span>{label}</span>
            <p>{title}</p>
            <h4>{price}</h4>

        </article>
    );
}

export default Product;
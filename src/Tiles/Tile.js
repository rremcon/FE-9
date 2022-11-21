import React from 'react';

function Tile({image, title, summary}) {
    return (
        <section>
            <img src={image} alt={""} />
            <h2>{title}</h2>
            <p>{summary}</p>

        </section>
    );
}

export default Tile;

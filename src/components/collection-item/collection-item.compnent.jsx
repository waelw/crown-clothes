import React from "react"
import "./collection-item.style.scss"
const CollectionItem = ({id,name,price,imageUrl})=>
(
    <div className="collection-item">

        <div className="image"
        style={{backgroundImage : `url(${imageUrl})`}}
        >
        <h1>{console.log(price)}</h1>
        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>

        </div>

    </div>
)
export default CollectionItem
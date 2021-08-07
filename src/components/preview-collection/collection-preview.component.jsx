import React from "react"
import "./collection-preview.style.scss"
import CollectionItem from "../collection-item/collection-item.compnent"
const CollectionPreview = ({title,items})=>
(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>

        <div className="preview">
            {
                items.filter((item,idx)=>(idx<4)).map(({id,...itemsProbs})=>(<CollectionItem key ={id} {...itemsProbs}></CollectionItem>))
            }
        </div>
    </div>
)
export default CollectionPreview
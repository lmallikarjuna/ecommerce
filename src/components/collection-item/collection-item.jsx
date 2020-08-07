import React from "react";

import "./collection-item.style.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
    console.log(imageUrl);
    return (
    <div key={id} className="collection-item">
      <div
        className="image"
        style={{ 
            backgroundImage: `url(${imageUrl})` 
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

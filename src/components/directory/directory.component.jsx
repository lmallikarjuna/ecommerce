import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "T-Shirts",
          link: "tshirt",
        },
        {
          id: 2,
          title: "Jackets",
          link: "jacket",
        },
        {
          id: 3,
          title: "Shoes",
          link: "shoes",
        },
        {
          id: 4,
          title: "Hats",
          link: "hats",
        },
        {
          id: 5,
          title: "Mens",
          link: "mens",
        },
        {
          id: 6,
          title: "Women's",
          link: "womens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...others }) => {
          return <MenuItem key={id} {...others} />;
        })}
      </div>
    );
  }
}

export default Directory;

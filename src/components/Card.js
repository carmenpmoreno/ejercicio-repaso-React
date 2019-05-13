import React from 'react';

class Card extends React.Component {
  render() {
    const {name, colors } = this.props;
    return (
      <div className="card">
        <h2 className="card__name  ">{name}</h2>
        <ul className="card__colors">
          {colors.map((color, colorIndex) => {
            return (
              <li
                className="color"
                key={colorIndex}
                style={{ backgroundColor: `#${color}` }}
                onClick={this.handleColorClick}
              >
                {color}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Card;

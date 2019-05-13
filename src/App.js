import React from 'react';
import './App.scss';
import Card from './components/Card'

const data = {
  version: 'v0.0.0',
  palettes: [
    {
      name: 'Tardis Blue',
      from: 'Doctor Who',
      colors: ['003A6E', '9B9A99', '000000', 'FFFFFF', '6F4500']
    },
    {
      name: 'Millenium Falcon',
      from: 'Star Wars',
      colors: ['B6B6BE', 'D8D7D4', '413A31', '746C66', 'A32D2C']
    },
    {
      name: 'Battlestar Galactica',
      from: 'Battlestar Galactica',
      colors: ['080F19', '1B2E3F', '364269', '3D6973', 'E5635F']
    },
    {
      name: 'Serenity',
      from: 'Firefly',
      colors: ['3C5375', '7285A6', '96AABF', 'F1DB7E', '0C0C0C']
    },
    {
      name: 'Nostromo',
      from: 'Alien',
      colors: ['08070C', 'F4F3F5', '121828', '464F75', '9ABEF2']
    }
  ]
};

class App extends React.Component {

  handleColorClick(event) {
    const color = event.currentTarget.innerHTML;
    console.log(`#${color}`);
  }

  render() {
    return (
      <div className="App">
        <ul className="palettes">
          {data.palettes.map((item, index) => {
            return (
              <li className="palette" key={`p${index}`} id={`p${index}`}>
              <Card 
                name = {item.name}
                colors = {item.colors}
              />
                {/* <div className="card">
                  <h2 className="card__name  ">{item.name}</h2>
                  <ul className="card__colors">
                    {item.colors.map((color, colorIndex) => {
                      return (
                        <li
                          className="color"
                          key={colorIndex}
                          style={{ backgroundColor: `#${color}` }}
                          onClick = {this.handleColorClick}
                        >
                          {color}
                        </li>
                      );
                    })}
                  </ul>
                </div> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

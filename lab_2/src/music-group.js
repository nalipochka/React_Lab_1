import React from "react";
export default class Band extends React.Component {
    title = "System of a Down";
    members = [
        "Serj Tankian",
        "Daron Malakian",
        "John Dolmayan",
        "Andy Khachaturian"
    ];
    albums = [
        "https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg",
        "https://upload.wikimedia.org/wikipedia/en/b/bc/System_of_a_down.jpg",
        "https://upload.wikimedia.org/wikipedia/ru/thumb/0/07/System_of_a_Down_-_Hypnotize.jpg/274px-System_of_a_Down_-_Hypnotize.jpg"
    ]

    render() {
        return <div class="band-info">
        <h1>System of a Down</h1>
        <ul>
          <li>Serj Tankian</li>
          <li>Daron Malakian</li>
          <li>John Dolmayan</li>
          <li>Andy Khachaturian</li>
        </ul>
        <div class="album-covers">
          <img src="https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg" alt="Toxicity"></img>
          <img src="https://upload.wikimedia.org/wikipedia/en/b/bc/System_of_a_down.jpg" alt="System of a Down"></img>
          <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/0/07/System_of_a_Down_-_Hypnotize.jpg/274px-System_of_a_Down_-_Hypnotize.jpg" alt="Hypnotize"></img>
        </div>
      </div>
        
    }
}
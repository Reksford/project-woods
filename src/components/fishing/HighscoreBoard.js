import {useEffect, useState} from 'react';
import HighscoreListing from './HighscoreListing';

const HighscoreBoard = () => {
  const [lists, setLists] = useState({small: [], medium: [], large: []});
  const [data, setData] = useState([])

  const fetchScoreboard = async() => {
    try {
      const response = await fetch(process.env.REACT_APP_HEROKU_APP + "scoreboard");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
        console.error(err.message);
    }
  }

  useEffect(() => {
    fetchScoreboard();
  }, [])

  useEffect(() => {
    const small = [], medium = [], large = [];
    const smallFish = ["Carp", "Perch", "Mackerel", "Trout", "Walleye"];
    const mediumFish = ["Flounder", "Snapper", "Salmon", "Cod", "Catfish"];
    const largeFish = ["Bass", "Tuna", "Marlin", "Pike", "Sturgeon"];

    for (let entry of data) {
      if (smallFish.includes(entry.fish_name)) {
        small.push(entry);
      } else if (mediumFish.includes(entry.fish_name)) {
        medium.push(entry);
      } else if (largeFish.includes(entry.fish_name)) {
        large.push(entry);
      }
      setLists({small, medium, large});
    }
  }, [data])

  return (
    <div className="col-9 d-flex flex-grow-1 HighscoreBoard">
      <HighscoreListing type='small' arr={lists.small}/>
      <HighscoreListing type='medium'arr={lists.medium}/>
      <HighscoreListing type='large'arr={lists.large}/>
    </div>
  )

}

export default HighscoreBoard;

import {useEffect, useState} from 'react';
import HighscoreListing from './HighscoreListing';
// expect Data fish: {fish:fishObj, player:playerNickname}
import data from '../../assets/tempData.json';

const HighscoreBoard = () => {
  const [lists, setLists] = useState({small: [], medium: [], large: []});

  useEffect(() => {
    let small = [], medium = [], large = [];
    //fetch data
    for (let entry in data) {
      switch (data[entry].fish.type) {
        case 'small':
            small.push(data[entry]);
          break;
        case 'medium':
            medium.push(data[entry]);
          break;
        case 'large':
            large.push(data[entry]);
          break;
      } //switch
      setLists({small, medium, large});
    }
  },[])

  return (
    <div className="col-9 d-flex flex-grow-1 HighscoreBoard">
      <HighscoreListing type='small' arr={lists.small}/>
      <HighscoreListing type='medium'arr={lists.medium}/>
      <HighscoreListing type='large'arr={lists.large}/>
    </div>
  )

}

export default HighscoreBoard;
